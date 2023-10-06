#!/bin/sh


# Produce pairwise alignments for every possible pair of catalytic domains and calculate the pairwise rmsd


# Prepare all alignments
cd pairwise


for d1 in ../alignment/chunky/;
do

	# Name of the amino acid
	aa1="${d1/*alignment/}"
	aa1="${aa1///}"



	for d2 in ../alignment/duf*/;
	do

		#echo $d2

		# Name of the amino acid
		aa2="${d2/*alignment/}"
		aa2="${aa2///}"

		if [[ $aa1 < $aa2 ]]; then
			
			echo "Aligning $aa1 with $aa2 (${aa1}_${aa2})"


			# Make a directory
			dir="${aa1}_${aa2}"
			mkdir -p $dir
			cp template.html $dir/index.html
			cp REF.md $dir/REF.md



			# List of structures
			mkdir -p $dir/data
			rm -f $dir/data/structures.txt
			touch $dir/data/structures.txt

			for f in $d1/data/structures/*.pdb;
			do
				echo "../../$f" >> $dir/data/structures.txt
			done
			for f in $d2/data/structures/*.pdb;
			do
				echo "../../$f" >> $dir/data/structures.txt
			done



			# Alignment
			cd $dir/data
			~/DeepAlign/3DCOMB -i structures.txt -o align
			


			# Make a secondary structure fasta file from dssp
			Rscript ../../../scripts/dssp2pdbMulti.R


			# Make a secondary structure fasta file from dssp and alignment
			Rscript ../../../scripts/dssp2fasta.R


			# Refine the alignment
			Rscript ../../../scripts/refineMSA.R align.ali secondary.fasta
			mv align.ali unrefined.fasta
			mv refined.fasta align.ali
			Rscript ../../../scripts/dssp2fasta.R
			
			
			rm -f unrefined.fasta
			rm -f align.rms
			rm -f align.rmt


			# Generate json file
			cd ../
			Rscript ../../scripts/pairwiseJSON.R ../$d1/info.json ../$d2/info.json



			cd ../





		fi


	done


done


Rscript ../scripts/preparePairwiseMatrix.R

