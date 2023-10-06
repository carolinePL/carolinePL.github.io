


x.df = read.table("data/accessions.csv", header=T, sep=",")





files = list.files("alignment", recursive=T)
files = files[grep("/structures/", files)]
families = sapply(strsplit(files, "/"), function(ele) ele[1])
pdbs = sapply(strsplit(files, "/"), function(ele) ele[length(ele)])
pdbs = gsub("[.]pdb", "", pdbs)
for (p in 1:length(pdbs)){

	pdb = pdbs[p]
	fam = families[p]
	match = which(x.df$accession == pdb)
	if (length(match) == 0){
		cat(paste("warning cannot find", pdb, "\n"))
		next
	}

	x.df$name[match] = fam

}







write.table(x.df, "data/accessions.csv", sep="\t", quote=F, row.names=F)