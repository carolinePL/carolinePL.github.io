# Bacterial flagellum proteins

### Dependencies

**DeepAlign.** This is used for generating protein structure alignments and can be downloaded here:
https://github.com/realbigws/DeepAlign


It is assumed that the DeepAlign directory is installed in the home directory ```~/DeepAlign```


**DSSP.** This is used for defining secondary structures from pdb files. It can be installed using 
```sudo apt-get install dssp```



## Aligning

Ensure that all of the pdb files are in the ```\*/\*/data/structures``` directories and then run: 
```make align```

or to only align a single protein dataset use:
```
cd alignment/mota/
bash ../../scripts/align.sh
```


## Updating metadata

To update the metadata, edit the ```data/accessions.csv``` file, then to push the changes through to appear on the webpage, run


```
make accessions
```

This will update the ```data/accessions.json``` file which is read by the website.

## Running the website locally
Navigate to the root of this repository and run

``
http-server
``

Then open the local host in the web-browser. For many machines this address is:

``
http://localhost:8080/
``


