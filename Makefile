
accessions:
	Rscript scripts/tsv2json.R data/accessions.csv accession



align:
	cd alignment/mota && echo "mota"; \
	bash ../../scripts/align.sh
