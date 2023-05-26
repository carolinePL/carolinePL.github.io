#!/bin/sh

# sudo apt-get install dssp

cd data

rm -f structures.txt
touch structures.txt


rm -r -f dssp
mkdir -p dssp
cd structures/
for f in *.pdb;
do

	echo $f
	echo "structures/$f" >> ../structures.txt
	mkdssp -i $f -o $f.dssp
	mv $f.dssp ../dssp/.
	Rscript ../../../../scripts/dssp2pdb.R ../dssp/$f.dssp $f

done
cd ../

# Structural alignment
~/DeepAlign/3DCOMB -i structures.txt -o align



# DSSP
Rscript ../../../scripts/dssp2pdbMulti.R


# Make a secondary structure fasta file from dssp and alignment
Rscript ../../../scripts/dssp2fasta.R




# Refine the alignment
Rscript ../../../scripts/refineMSA.R align.ali secondary.fasta
mv align.ali unrefined.fasta
mv refined.fasta align.ali
Rscript ../../../scripts/dssp2fasta.R


