Script started on 2023-10-06 14:00:50+13:00 [TERM="xterm-256color" TTY="/dev/pts/16" COLUMNS="176" LINES="33"]
jdou557@SC438316:~/Documents/Flagellum/carolinePL.github.io/pairwise$ npx http-server[Knpx http-server[7Pgit pullnpx http-server[KRscrip [Kt ../scripts/preparePairwiseMatrix.R 
Error: unexpected symbol in "Script started"
Execution halted
jdou557@SC438316:~/Documents/Flagellum/carolinePL.github.io/pairwise$ cd ../
jdou557@SC438316:~/Documents/Flagellum/carolinePL.github.io$ cd pairwise/
jdou557@SC438316:~/Documents/Flagellum/carolinePL.github.io/pairwise$ cd pairwise/[6P../Rscript ../scripts/preparePairwiseMatrix.R 
jdou557@SC438316:~/Documents/Flagellum/carolinePL.github.io/pairwise$ exit

Script done on 2023-10-09 09:02:26+13:00 [COMMAND_EXIT_CODE="0"]
SON[paste0("url_", key)] = paste0("/pairwise/", aa1, "_", aa2)
	JSON[paste0("name_", key)] = json$fullName
	JSON[paste0("d_", key)] = dist


	# get the full name of each 
	aa.names[aa1] = json$family1
	aa.names[aa2] = json$family2


}


# Heatmap to get ordering of families
map = heatmap(distance.mat, symm=T)
ordered = aa[map$rowInd]



JSON$families = ordered
JSON$familyNames = aa.names


exportJSON <- toJSON(JSON, indent=4)
write(exportJSON, paste0("../", aaClass, "/info.json"))
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ing to info.json
saving to README.md
Aligning chunky with duf2 (chunky_duf2)
input:structures.txt, #structures:62
Results:
Objective function value is 96.053457
CORE_LEN= 131, RMSD=  3.016, Ave_TMscore=0.7177
[?25h[?25h[?25h[?25h[?25h[?25h[?25h[?25h[?25h[?25h[?25h[?25h[?25h[?25h[?25h[?25h[?25hLoading required package: Biostrings
Loading required package: BiocGenerics

Attaching package: ‘BiocGenerics’

The following objects are masked from ‘package:stats’:

    IQR, mad, sd, var, xtabs

The following objects are masked from ‘package:base’:

    anyDuplicated, aperm, append, as.data.frame, basename, cbind,
    colnames, dirname, do.call, duplicated, eval, evalq, Filter, Find,
    get, grep, grepl, intersect, is.unsorted, lapply, Map, mapply,
    match, mget, order, paste, pmax, pmax.int, pmin, pmin.int,
    Position, rank, rbind, Reduce, rownames, sapply, setdiff, sort,
    table, tapply, union, unique, unsplit, which.max, which.min

Loading required package: S4Vectors
Loading required package: stats4

Attaching package: ‘S4Vectors’

The following objects are masked from ‘package:base’:

    expand.grid, I, unname

Loading required package: IRanges
Loading required package: XVector
Loading required package: GenomeInfoDb

Attaching package: ‘Biostrings’

The following object is masked from ‘package:base’:

    strsplit


Attaching package: ‘seqinr’

The following object is masked from ‘package:Biostrings’:

    translate

use default substitution matrix
use default substitution matrix
use default substitution matrix
use default substitution matrix
use default substitution matrix
use default substitution matrix
use default substitution matrix
Rejected refinement because it is longer than original
use default substitution matrix
Pruned 519 sites from the alignment. Saving fasta to refined.fasta 
Refined 300 sites (33%)
saving to info.json
saving to README.md
Error: unexpected symbol in "Script started"
Execution halted
jdou557@SC438316:~/Documents/Flagellum/carolinePL.github.io$ exit

Script done on 2023-10-09 09:02:22+13:00 [COMMAND_EXIT_CODE="1"]
