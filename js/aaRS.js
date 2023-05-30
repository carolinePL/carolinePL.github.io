IS_MOBILE = (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		   			 || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)));



DATA = {};
FADE_TIME = 50;



PV_VIEWERS = {};
PV_PDBS = {};
PV_GEOMS = {};

SELECTED_SITES = {lower: -1, upper: -1};
SELECTED_ACCESSION = null;

AA_COLS = {A: "#80a0f0", I: "#80a0f0", L: "#80a0f0", M: "#80a0f0", F: "#80a0f0", W: "#80a0f0", V: "#80a0f0",
          K: "#f01505", R: "#f01505",
          D: "#c048c0", E: "#c048c0",
          N: "#15c015", S: "#15c015", Q: "#15c015", T: "#15c015",
          C: "#f08080",
          G: "#f09048",
          P: "#c0c000",
          H: "#15a4a4", Y: "#15a4a4",
          X: "#ffffff"};



// http://bioinformatica.isa.cnr.it/SUSAN/NAR2/dsspweb.html#:~:text=DSSP%20assigns%20seven%20different%20secondary,no%20secondary%20structure%20is%20recognized
AA_COLS_2 = {E: "#FFC20A", H: "#0C7BDC", G: "#0C7BDC", I: "#0C7BDC", T:"#d3d3d3", S: "#d3d3d3",  B: "#d3d3d3",  N: "#ffffff"};
AA_FONT_COLS_2 = {E: "#222222", H: "#222222", G: "#222222", I: "#222222", T:"#222222", S: "#222222",  B: "#222222",  N: "#111111",};


IS_SUPERFAMILY = false;
PAIRWISE = false;

MIN_SSE_LEN = 2;


// Canonical ordering on 3dcomb
CHAIN_NAMES = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
               "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
               "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];



NT_WIDTH = 10;
NT_HEIGHT = 13;
FEATURE_HEIGHT_ALN = 18;
FEATURE_HEIGHT_SEC = 30;
FEATURE_FONT_SIZE = 14;
SEC_WIDTH = 1.0;
SEC_HEIGHT = 20;
NT_FONT_SIZE = 11;
ALN_LABEL_WIDTH = 300;



SELECT_FONT_FADEOUT_TIME = 10000;

CATALYTIC_DOMAIN_WIDTH = 600;
CATALYTIC_DOMAIN_HEIGHT = 350;
CATALYTIC_DOMAIN_XPAD = 20;
CATALYTIC_DOMAIN_YPAD = 40;
CATALYTIC_DOMAIN_STRAND_ARROW_HEAD_LEN_1 = 40;
CATALYTIC_DOMAIN_STRAND_ARROW_HEAD_LEN_2 = 45;
CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP = 0.58;
CATALYTIC_DOMAIN_HELIX_WIDTH_PROP = 0.8;
CATALYTIC_DOMAIN_CUBIC_RIGHT_DX = 0;
CATALYTIC_DOMAIN_LOOP_WIDTH = 3;
CATALYTIC_DOMAIN_HELIX_CORNER_RADIUS = 7;
CATALYTIC_DOMAIN_FONT_SIZE = 18;
CATALYTIC_DOMAIN_MOTIF_FONT_SIZE = 15;
CATALYTIC_DOMAIN_ARROW_BG_WIDTH = 4;


STRAND_ARROW_HEAD_LEN_1 = 5;
STRAND_ARROW_HEAD_LEN_2 = 6;
STRAND_ARROW_BASE_WIDTH = 7;
STRAND_ARROW_HEAD_WIDTH = 13;
HELIX_WIDTH = 11;
HELIX_CORNER_RADIUS = 1.75;

if (IS_MOBILE){
	
	let factor = 2;
	NT_WIDTH *= factor+0.5;
	NT_HEIGHT *= factor+0.5;
	NT_FONT_SIZE *= factor+0.5;
	SEC_WIDTH *= factor;
	SEC_HEIGHT *= factor;
	ALN_LABEL_WIDTH *= factor;
	FEATURE_HEIGHT_ALN *= factor;
	FEATURE_HEIGHT_SEC *= factor;
	FEATURE_FONT_SIZE *= factor;
	STRAND_ARROW_HEAD_LEN_1 *= factor;
	STRAND_ARROW_HEAD_LEN_2 *= factor;
	STRAND_ARROW_BASE_WIDTH *= factor;
	STRAND_ARROW_HEAD_WIDTH *= factor;
	HELIX_WIDTH *= factor;
	HELIX_CORNER_RADIUS *= factor;
	CATALYTIC_DOMAIN_WIDTH *= 1.25;
	CATALYTIC_DOMAIN_HEIGHT *= 1.25;
	CATALYTIC_DOMAIN_FONT_SIZE *= 1.25;
	CATALYTIC_DOMAIN_MOTIF_FONT_SIZE *= 1.25;
	CATALYTIC_DOMAIN_ARROW_BG_WIDTH *= 1.25;
}

LEVEL_1_COL = "#fa2a5599";
LEVEL_2_COL = "#a6a6a6";
LEVEL_3_COL = "#d3d3d3";
LEVEL_4_COL = "transparent";



function renderaaRS(isPairwise = false, isSuperfamily = false){


  PAIRWISE = isPairwise;
  IS_SUPERFAMILY = isSuperfamily
  

   

	// Add loading wheel
	$("#alignment").before(`<div id="mainloader" class='loader'><img src='/fig/icon_white.png'></img></div>`);
  
  
  renderHeader();
  
  
	// Accession metadata dialog
	let metadata = $(`<div id="metadataDlg">
						<table>
						</table>
					</div>`);
	$("#main").append(metadata);
	if (IS_MOBILE) $("#metadataDlg").addClass("mobile");
	$("#metadataDlg").hide(0);
	
	// Click on anything to clear it...
  	$("#main")[0].addEventListener('click', function(evt) { 
		$("#metadataDlg").hide(0);
	});
	
	// ... except for the table itself
  	$("#metadataDlg")[0].addEventListener('click', function(evt) { 
		evt.stopPropagation();
	});

  

  // Section titles
  $(".summary").prepend("<h2>Summary</h2>");
  $("#flexContainer .notes").prepend("<h2>Introduction</h2>");
  $("#references").prepend("<h2>References</h2>");

  loadAllFiles(function(){


    //console.log(DATA);
    renderAlignment("alignment", true, "data/align.ali");
    renderAlignment("alignment2", false, "data/secondary.fasta");
    renderSecondary($("#secondary"));



  
  
  
  // More section titles
  $("#alignment").before("<h2>Primary structure</h2>");
  $("#alignment2").before("<h2>Secondary structure</h2>");
  $("#secondary").before("<h2>Domain architecture</h2>");
  $("#secondary").before("<div class='helperNote'>Click on an accession or domain below, or drag a region, to select it. Right click on an accession for more information.</div>");
  let imgWidth = IS_MOBILE ? 30 : 15;
  $("#secondary").after(`<div class='helperNote'>
							<span><img src="/fig/Archaea.png"  height="` + imgWidth + `px"></img> - Archaea </span>
							<span><img src="/fig/Bacteria.png"  height="` + imgWidth + `px"></img> - Bacteria </span>
							<span><img src="/fig/xray.png" height="` + imgWidth + `px"></img> - Solved structure </span>
							<span><img src="/fig/alphafold.png"  height="` + imgWidth + `px"></img> - Computational prediction </span>
						</div>`);
  $("#tertiaryTable").prepend("<h2>Tertiary structure</h2>");

  
	
	



   // Footnote
   //$("#secondary").parent().before("<div class='footnote'>Extended strands and helices are displayed only if at least " + MIN_SSE_LEN + " residues in length.</div>");
  



	// Tertiary dropdowns
	$("#tertiaryTable").append("<span class='button' onClick='deselectSites(); deselectTaxa(true)'>Clear selection</span>");
	$("#tertiaryTable").append("<span class='dropdownDiv domainSelect'>Domain: <select id='domainSelect'></select></span>");
	$("#tertiaryTable").append("<span class='dropdownDiv colouring'>Alignment colour: <select id='tertiaryColouringAln'></select></span>");
	$("#tertiaryTable").append("<span class='dropdownDiv colouring'>Reference colour: <select id='tertiaryColouringSingle'></select></span>");
	
	
	if (IS_MOBILE){
		$("#tertiaryTable").find("span").after("<br>");
		$("#tertiaryTable").find("span").css("display", "inline-block");
	}
	
	// Domain selection
    let dropdown = $("#domainSelect");
    dropdown.append("<option value='_full'> Full protein </option>");
    for (let f in DATA.features){
      if (DATA.features[f].level > 1){
        dropdown.append("<option value='" + f + "'>" + f + "</option>");
      }
      
    }
    $(dropdown).on("change", function(){
      $("#tertiary").html("");
      renderTertiary("data/align.pdb", "superposition");
    });
	
		
	if (PAIRWISE) {
		$("#tertiaryTable .domainSelect").hide();
	}
	
	
	
	// Protein colouring
	let dropdowns = $("#tertiaryTable").find(".colouring");
	for (let d = 0; d < dropdowns.length; d ++){
		let dropdownCol = $(dropdowns[d]).find("select");
		dropdownCol.append("<option value='byChain'>Chain</option>");
		dropdownCol.append("<option value='rainbow'>Position</option>");
		dropdownCol.append("<option value='bySS'>Secondary structure</option>");
		dropdownCol.append("<option value='ssSuccession'>Secondary structure succession</option>");
		$(dropdownCol).val("bySS");
		$(dropdownCol).on("change", function(){
			 recolourTertiaries();
		});
	}


	renderTertiary("data/align.pdb", "superposition");


  // Synchronise scroll bars
  $("#alignment").scroll(function () { 
    $("#alignment2").scrollTop($("#alignment").scrollTop());
    $("#alignment2").scrollLeft($("#alignment").scrollLeft());
  });
  $("#alignment2").scroll(function () { 
    $("#alignment").scrollTop($("#alignment2").scrollTop());
    $("#alignment").scrollLeft($("#alignment2").scrollLeft());
  });



	



  // Delete loader
  $("#mainloader").remove();

	

  })

	
}


// Return the official name of a sequence, indepenedent of its file name
function getNameOfAccession(acc){

	
	acc = acc.replace(".pdb", "");
	let metadata = DATA.metadata[acc];
	if (metadata == null){
		console.log("cannot find", acc);
		return "error";
	}
	
	let isPDB = metadata.pdb != "" && metadata.pdb != "NA";
	
	if (isPDB){
		//return metadata.name + "_" + metadata.species;
	}else{
		//return metadata.name + "_" + metadata.species;
	}
	
	let species = metadata.species.split("_");
	if (species.length > 1){
		species = species[0] + " " + species[1];
	}
	let str = species + " (" + metadata.name + ")";
	return str;
	
	
}


// Return the domain (of life) for a sequence
function getLifeDomainOfAccession(acc){
	
	acc = acc.replace(".pdb", "");
	let metadata = DATA.metadata[acc];
	if (metadata == null){
		console.log("cannot find", acc);
		return null;
	}

	return metadata.domain;
	
	
}



// Is the structure wet-lab experimental (ie. on rcsb) or is it alphafold
function accessionIsExperimental(acc){
	
	acc = acc.replace(".pdb", "");
	let metadata = DATA.metadata[acc];
	if (metadata == null){
		console.log("cannot find", acc);
		return null;
	}

	let isPDB = metadata.pdb != "" && metadata.pdb != "NA";
	return isPDB;
	
	
}


/*
* Render meta info stored in json file onto page
*/
function renderInfo(text, resolve=function() { }){
	
	text = text.replaceAll("\n", "").replaceAll("\r", "");
	var json = JSON.parse(text);


	// Page title
	$("title").html(json.fullName);

	// Page icon
	$("link[rel='icon']").attr("href", json.icon);
	
	// Page main header
	 $("#main").prepend("<h1>" + json.fullName + "</h1>");
	 
	 

	$(".summary").append("<table></table>");

  // Summary table for families
  
  	$(".summary table").append(`<tr>
  								<th>Family</th>
  								<td>` + json.name + `</td>
  							</tr>`);

  



  DATA.features = json.features;


  let resolve2 = function(){

	  resolve();

  }
  
  // Load accessions
  fetch("/data/accessions.json").then(response => response.text()).then(text => loadAcccessionMetadata(text, resolve2));



}

function renderTertiary(pdb = null, id = "tertiary") {
	
	
	var options = {
	  width: IS_MOBILE ? 700 : 450,
	  height: IS_MOBILE ? 700 : 450,
	  antialias: !IS_MOBILE,
	  quality : 'high'
	};
	
	// Hide and show again to prevent the annoying scrolling activity, unless already in viewport
	let hideAndShow = true;// $('#' + id).isInViewport();

	if (hideAndShow){
		$("#" + id).hide(0);
	}else{
		$("#" + id).show(0);
	}
  

  // Reset canvas
  $("#" + id).html("");


  // Try to load it
  if (pdb == null){
    pdb = PV_PDBS[id];
  }

  // Which protein domain?
  var domain = $("#domainSelect").val();
  var domainDir = domain.replaceAll(" ", "_");
  if (domain != "_full"){
    pdb = pdb.replace("data/", "")
    pdb = "data/domains/" + domainDir + "/" + pdb ;
  }
  PV_PDBS[id] = pdb;


  // Load/save viewer
  var viewer = null;
  if (PV_VIEWERS[id] == null){
    viewer = pv.Viewer(document.getElementById(id), options);
  }else{
    viewer = PV_VIEWERS[id];
    viewer.rm("");
    viewer = pv.Viewer(document.getElementById(id), options);
    
  }
  PV_VIEWERS[id] = viewer;

  //console.log(pdb);


  
  if (hideAndShow){
	  setTimeout(function(){
		$("#" + id).show(0);
	  }, 1);
  }
	
	// https://pv.readthedocs.io/en/v1.8.1/intro.html
 // asynchronously load the PDB file for the dengue methyl transferase from the server and display it in the viewer.
  pv.io.fetchPdb(pdb, function(structure) {

   

	  
    // Display the protein as cartoon
	  if (id == "tertiary"){
		var method = $("#tertiaryColouringSingle").length == 0 ? "color.ssSuccession" : "color." + $("#tertiaryColouringSingle").val();
		  PV_GEOMS[id] = viewer.cartoon('protein', structure, { color : colourSelected(id, eval(method)) });
	  }else{
		var method = $("#tertiaryColouringAln").length == 0 ? "color.bySS" : "color." + $("#tertiaryColouringAln").val();
		 PV_GEOMS[id] = viewer.cartoon('protein', structure, { color : colourSelected(id, eval(method)) });
	  }
	 
    viewer.centerOn(structure);
	  viewer.setZoom(150);
    //viewer.autoZoom();

    let acc = pdb.split("/");
    acc = acc[acc.length-1];
	  $("#" + id).append("<div class='pdblabel'>" + acc + "</div>");


    // Back to top
	  //$('html,body').scrollTop(0);


  });
  

	
}






 // Update tertiary colours
function recolourTertiaries(){


  // Full only
  var redraw = false;
  if ($("#domainSelect").val() != "_full"){
    redraw = true;
    $("#domainSelect").val("_full");
  }

    for (var id in PV_VIEWERS){

      if (redraw){
        var pdb = PV_PDBS[id].split("/");
        pdb = pdb[pdb.length-1];
        if (id == "tertiary"){
          pdb = "data/dssp/" + pdb;
        }else{
          pdb = "data/" + pdb;
        }
        
        renderTertiary(pdb, id);

      }

      else {
        if (id == "tertiary"){
		  var method = "color." + $("#tertiaryColouringSingle").val();
          PV_GEOMS[id].colorBy(colourSelected(id, eval(method)) );
        }else{
		  var method = "color." + $("#tertiaryColouringAln").val();
          PV_GEOMS[id].colorBy(colourSelected(id, eval(method) ));
        }
        PV_VIEWERS[id].requestRedraw();
      }
    }


}

// Colour pdb structure by highlighting selected residues
function colourSelected(id, defaultFn) {

  // Default colouring
  if (SELECTED_SITES.lower == -1) {
    return defaultFn();
  }


  // Colour function
  var colorFunc = function(atom, out, index) {

    var chainName = atom.residue().chain().name();
    var chain1Name = atom.residue().chain().structure().chains()[0].name();
    //console.log(atom.residue().chain().structure().chains())


    // Get accession
    var pdb = PV_PDBS[id];
    var acc = null;
    if (id == "tertiary"){


      // Main chain only
      if (chainName != chain1Name) {
        out[index+0] = 0.6; out[index+1] = 0.6;
        out[index+2] = 0.6; out[index+3] = 0.8;
        return;
      }

      // Single structure
      acc = pdb.split("/");
      acc = acc[acc.length-1];


    }else{

      // Alignment
      var chainNum = 0;
      for (var chainNum = 0; chainNum < CHAIN_NAMES.length; chainNum++){
        if (CHAIN_NAMES[chainNum] == chainName){
          acc = DATA.accessions[chainNum];
          break;
        }
      }

    }



    // Get site in alignment
    var siteAln = -1;
    var seq = DATA.alignment[acc];
    var nsites = seq.length;
    var resNum = atom.residue().index();
    var pdbIndex = 0;
    for (var siteNum = 0; siteNum < nsites; siteNum++){

      if (seq[siteNum] == "-"){

      }else{

        if (pdbIndex == resNum){
          siteAln = siteNum;
          break;
        }
        pdbIndex++;
      }

    }


    
    // index + 0, index + 1 etc. are the positions in the output array
    // at which the red (+0), green (+1), blue (+2) and  alpha (+3)
    // components are to be written.
    if (siteAln >= SELECTED_SITES.lower && siteAln <= SELECTED_SITES.upper){
      out[index+0] = 0.0; out[index+1] = 0.549;
      out[index+2] = 0.729; out[index+3] = 1.0;
    }else{
      out[index+0] = 0.6; out[index+1] = 0.6;
      out[index+2] = 0.6; out[index+3] = 0.7;
    }


  }

  return new pv.color.ColorOp(colorFunc);


}



/*
* A domain architecture map in svg
*/
function renderSecondary(svg){


    // Number of sequences
    var alignment = DATA.secondary;
    var accessions = DATA.accessions;
    var nseq = accessions.length;
    var nsites = alignment[accessions[0]].length;
    var features = DATA.features;


    console.log("rendering alignment with", nseq, nsites)


    svg.hide();
    svg.html("");
    svg.height(SEC_HEIGHT*(nseq+1) + FEATURE_HEIGHT_SEC*5);
    svg.width(SEC_WIDTH*(nsites+100) + ALN_LABEL_WIDTH);


    // Groups
    var svgAnnotation = $(drawSVGobj(svg, "g", {class: "annotation"}));
    var svgHighlight = $(drawSVGobj(svg, "g", {class: "highlight"}))
    var svgContent = $(drawSVGobj(svg, "g", {class: "content"}));


    // Residue selection dragger
    const eleSvg = $(svg).get(0); //document.getElementById(svg.attr("id"));
    eleSvg.addEventListener('mousedown', ({clientX, clientY}) => {

			  
			var x1 = clientX - svg.offset().left;
			var y1 = clientY - svg.offset().top;
			if (x1 <= ALN_LABEL_WIDTH) return;
			if (y1 >= SEC_HEIGHT*(nseq+1)) return;



      var clearing = false;

      // Clear selection and draw new rectangle
      if (SELECTED_SITES.lower != -1 || svgHighlight.find(".selectionRect").length > 0){
        clearing = true;
      }


       deselectSites();
      
      
      var res1 = Math.floor((x1 - ALN_LABEL_WIDTH) / SEC_WIDTH) + 1;

      var rect = drawSVGobj(svgHighlight, "rect", {x: x1-SEC_WIDTH, y: 0, width: 0, height: SEC_HEIGHT*(nseq+1), class: "selectionRect", style: "stroke-width:1px; stroke:black; fill:#008cba55"} )
      var text = drawSVGobj(svgHighlight, "text", {x: SEC_WIDTH*5, y: svg.height() - SEC_WIDTH*5, class: "selectionRect", style: "text-anchor:start; dominant-baseline:auto; font-size:12px"}, "" )



      var mouseMove = function({clientX, clientY}){

        $(svgContent).find("text").attr("class", "");

        var x1_ = x1;
        var x2 = clientX - svg.offset().left;


        if (x1_ > x2){
          var tmp = x1_;
          x1_ = x2;
          x2 = tmp;
        }
        if (x1_ <= ALN_LABEL_WIDTH+1) x1_ = ALN_LABEL_WIDTH+1;
        if (x2 <= ALN_LABEL_WIDTH+1) x2 = ALN_LABEL_WIDTH+1;
        if (x1_ >= svg.width()-2) x1_ = svg.width()-2;
        if (x2 >= svg.width()-2) x2 = svg.width()-2;


        // What are the residue numbers?
        var res1_ = Math.floor((x1_ - ALN_LABEL_WIDTH) / SEC_WIDTH) + 1;
        var res2 = Math.floor((x2 - ALN_LABEL_WIDTH) / SEC_WIDTH) + 1;

        x1_ = res1_ * SEC_WIDTH + ALN_LABEL_WIDTH;
        x2 = res2 * SEC_WIDTH + ALN_LABEL_WIDTH;


        $(rect).attr("x", x1_);
        $(rect).attr("width", x2-x1_);
        $(text).html("Selected sites " + res1_ + "-" + res2);

        return {x1: x1_, x2: x2, res1: res1_, res2: res2};

      }

      var mouseUp = function({clientX, clientY}){


        var coords = mouseMove({clientX, clientY});


        SELECTED_SITES.lower = coords.res1;
        SELECTED_SITES.upper = coords.res2;

        // Clear selection
        if (clearing && SELECTED_SITES.upper - SELECTED_SITES.lower < 3){
			deselectTaxa();
		    deselectSites();
        }
		if (coords.x1 == coords.x2){
			deselectTaxa();
			deselectSites();
		}
		

        selectSites();

        eleSvg.removeEventListener('mouseup', mouseUp);
        eleSvg.removeEventListener('mouseleave', mouseUp);
        eleSvg.removeEventListener('mousemove', mouseMove);


      }


      eleSvg.addEventListener('mouseup', mouseUp);
      eleSvg.addEventListener('mouseleave', mouseUp);
      eleSvg.addEventListener('mousemove', mouseMove);


    });



    


     // Features
    for (var feature in features){


      var range = features[feature].range;
      var level = features[feature].level;
      let featureCount = features[feature].count; 
      if (range == "") continue;
      range = range.split("-")
      var y = SEC_HEIGHT*(nseq+1) + FEATURE_HEIGHT_SEC*(level-0.5);
      var lower = getAlignmentPosFromUngapped(features[feature].acc, range[0]);
      var upper = lower;
      var x1 = SEC_WIDTH*(lower) + ALN_LABEL_WIDTH;
      var x2 = x1 + NT_WIDTH;
      if (range.length == 2){
        upper = getAlignmentPosFromUngapped(features[feature].acc, range[1]);
        x2 = SEC_WIDTH*(upper + 1) + ALN_LABEL_WIDTH;
      }




      var textCol = "black";
      var col = level == 1 ? LEVEL_1_COL : level == 2 ? LEVEL_2_COL : level == 3 ? LEVEL_3_COL : LEVEL_4_COL;
      var txt = feature;
		  var lw = 0; //0.7;
		  if (level == 4){
	       lw = 0.7;
      }
	  

	  	let textFeature = null;
	  	let featureBg = null;
      if (level == 0){
        continue;
      }else if (featureCount != null){

      	// Only draw around a few sequences
      	let yAcc = -1;
      	for (let seqNum = 0; seqNum < nseq; seqNum++){
		      let accSeq = accessions[seqNum];
		      if (accSeq == features[feature].acc){
		      	yAcc = (seqNum+1)*SEC_HEIGHT;
		      	break;
		      }

		    }

		    if (yAcc != -1){


      		drawSVGobj(svgAnnotation, "rect", {x: x1-SEC_WIDTH, y: yAcc, width: x2-x1, height:SEC_HEIGHT*featureCount, style:"stroke-width:" +  lw + "px; stroke:black; fill:" + "white"});
					featureBg = drawSVGobj(svgAnnotation, "rect", {x: x1-SEC_WIDTH, y: yAcc, width: x2-x1, height:SEC_HEIGHT*featureCount, style:"stroke-width:" +  lw + "px; stroke:black; fill:" + col});

	      	// Triangle
	      	let yBtm = yAcc + SEC_HEIGHT*(featureCount+0.5);
					let points = (x1-NT_WIDTH/4) + "," + (yBtm-SEC_HEIGHT/8) + " " + (x1+NT_WIDTH/4) + "," + (yBtm-SEC_HEIGHT/8) + " " + x1 + "," + (yBtm-SEC_HEIGHT/2);
	  	  	drawSVGobj(svgContent, "polygon", {points: points, style: "stroke-width:0px; stroke:black; fill:" + "white"} ) // Triangle
	  	  	drawSVGobj(svgContent, "polygon", {points: points, style: "stroke-width:0.7px; stroke:black; fill:" + col} ) // Triangle


	  	  	// Test
	  	  	textFeature = drawSVGobj(svgContent, "text", {lower: lower, upper:upper,  x: x1-NT_WIDTH/4, y: yBtm-SEC_HEIGHT/20, style: "cursor:pointer; text-anchor:start; dominant-baseline:hanging; font-size:" + FEATURE_FONT_SIZE*0.8 + "px; fill:" + textCol}, value=txt)
	  	  



      	}
      }else {
		    drawSVGobj(svgAnnotation, "rect", {x: x1-SEC_WIDTH, y: SEC_HEIGHT, width: x2-x1, height:SEC_HEIGHT*nseq + FEATURE_HEIGHT_SEC*(level-1), style:"stroke-width:" +  lw + "px; stroke:black; fill:" + "white"});
				featureBg = drawSVGobj(svgAnnotation, "rect", {x: x1-SEC_WIDTH, y: SEC_HEIGHT, width: x2-x1, height:SEC_HEIGHT*nseq + FEATURE_HEIGHT_SEC*(level-1), style:"stroke-width:" +  lw + "px; stroke:black; fill:" + col});
      

      	// Triangle
				let points = (x1-NT_WIDTH/4) + "," + (y-SEC_HEIGHT/8) + " " + (x1+NT_WIDTH/4) + "," + (y-SEC_HEIGHT/8) + " " + x1 + "," + (y-SEC_HEIGHT/2);
  	  	drawSVGobj(svgContent, "polygon", {points: points, style: "stroke-width:0px; stroke:black; fill:" + "white"} ) // Triangle
  	  	drawSVGobj(svgContent, "polygon", {points: points, style: "stroke-width:0.7px; stroke:black; fill:" + col} ) // Triangle
  	  	


  	  	// Test
	  	  if (feature == "Motif 3" || feature == "KMSKS"){
	  		   textFeature = drawSVGobj(svgContent, "text", {lower: lower, upper:upper, x: x1+NT_WIDTH/4, y: y-SEC_HEIGHT/20, style: "cursor:pointer; text-anchor:end; dominant-baseline:hanging; font-size:" + FEATURE_FONT_SIZE + "px; fill:" + textCol}, value=txt)
	  	  }else{
	  		   textFeature = drawSVGobj(svgContent, "text", {lower: lower, upper:upper,  x: x1-NT_WIDTH/4, y: y-SEC_HEIGHT/20, style: "cursor:pointer; text-anchor:start; dominant-baseline:hanging; font-size:" + FEATURE_FONT_SIZE + "px; fill:" + textCol}, value=txt)
	  	  }



      }



      // Click on rect to go to link?
	  	let href = features[feature].href;
	  	if (href != null){
	  		$(featureBg).css("cursor", "pointer");
	  		$(featureBg).css("stroke-width", "0.5px");
	  		drawSVGobj(featureBg, "title", {}, "View alignment of " + txt);
	  		$(featureBg).bind("click", function(event){var u = $(this).attr("url");
  	  		let e = window.event;
  	  		if (e.ctrlKey){
  	  			window.open(href, '_blank');
  	  		}else{
   				 window.location.href = href;
  	  		}
	  		});

	  	}

  	 
 

      // Click on a feature to select residues
      if (textFeature != null){
	      $(textFeature).click(function(){
			  
			  
	        var ele = $(this);

	        if (ele.attr("class") == "selected"){
	          deselectSites(true);
	          return;
	        }

	        deselectSites();

	        $(ele).attr("class", "selected");
	        SELECTED_SITES.lower = parseFloat(ele.attr("lower"));
	        SELECTED_SITES.upper = parseFloat(ele.attr("upper"));
	        selectSites();


	      });
	     
	    }
  	}


		// Site numbering
    for (var site = 0; site < nsites; site++){
       
        var x = SEC_WIDTH*(site) + ALN_LABEL_WIDTH;

      if (site == 0 || (site+1) % 50 == 0){
      	var y = SEC_HEIGHT*0.5;
        drawSVGobj(svgContent, "text", {x: x + 2, y: y, style: "text-anchor:start; dominant-baseline:central; font-family:Source sans pro; font-size:" + NT_FONT_SIZE + "px"}, value=site+1)
				drawSVGobj(svgContent, "line", {x1:x, x2:x, y1:SEC_HEIGHT*0.25, y2:SEC_HEIGHT, style:"stroke:black;stroke-width:1px"})
   
	  	}else if((site+1) % 25 == 0){
	  		//drawSVGobj(svgContent, "line", {x1:x, x2:x, y1:SEC_HEIGHT, y2:SEC_HEIGHT*0.5, style:"stroke:black;stroke-width:1px"})
	  	}
    }

    // Sequence labels
    for (let seqNum = 0; seqNum < nseq; seqNum++){
      let acc = accessions[seqNum];
	  	let accPrint = getNameOfAccession(acc);
      let y = SEC_HEIGHT*(seqNum+1.5)
      let x = ALN_LABEL_WIDTH - 5*NT_FONT_SIZE;
      let url = DATA.urls[acc];
	  
	  
	  // Domain image
	  let domainOfLife = getLifeDomainOfAccession(acc);
	  if (domainOfLife != null){
		   let domainEle = drawSVGobj(svgContent, "image", {href:"/fig/" + domainOfLife + ".png", x: x+NT_FONT_SIZE, y: y-NT_FONT_SIZE/2, pdb: acc, height:SEC_HEIGHT*0.7})
		   drawSVGobj(domainEle, "title", {}, domainOfLife);
		   
		   
		   // PDB / alphafold 
		   let isPDB = accessionIsExperimental(acc);
		   let pdbImg = isPDB ? "xray" : "alphafold";
		   let pdbtitle = isPDB ? "Structure was determined experimentally (eg. x-ray or NMR)" : "Structure was predicted computationally using AlphaFold";
		   let methodEle = drawSVGobj(svgContent, "image", {href:"/fig/" + pdbImg + ".png", x: x+NT_FONT_SIZE*3, y: y-NT_FONT_SIZE/2, pdb: acc, height:SEC_HEIGHT*0.7})
		   drawSVGobj(methodEle, "title", {}, pdbtitle);
		   
	  }
	 

		// Click on an accession to select it
		let ele = drawSVGobj(svgContent, "text", {x: x, y: y, pdb: acc, style: "text-anchor:end; cursor:pointer; fill:#366BA1; dominant-baseline:central; font-size:" + NT_FONT_SIZE + "px"}, value=accPrint)
		$(ele).bind("click", function(event){
			var a = event.target.getAttribute("pdb");
			var directory = DATA.directories[a];
			directory = directory.replace("structures/", "dssp/");
			
			let sln = directory.split("/");
			sln = sln[sln.length-1];
			
			
			// Already selected. Deselect it
			if (SELECTED_ACCESSION == sln){
				deselectTaxa(true);
				return;
			}
			
			deselectTaxa();
			SELECTED_ACCESSION = sln;
			selectSites(false);


			if (!PAIRWISE) directory = "data/" + directory;
  			renderTertiary(directory);
  		});


    ele.addEventListener('contextmenu', function(evt) { 
			  
				let metadata = DATA.metadata[acc.replace(".pdb", "")];
			  
		        //console.log("right click", acc, metadata);
				if (metadata == null){
					$("#metadataDlg").hide(0);
					return;
				}
				
				let dlgTop = y + svg.offset().top;
				let dlgLeft = ALN_LABEL_WIDTH + svg.offset().left + 5;
				if (IS_MOBILE){
					dlgTop += NT_FONT_SIZE;
					dlgLeft = svg.offset().left;
				}
				$("#metadataDlg").css({top: dlgTop, left: dlgLeft});
				$("#metadataDlg table").html("");
				
				
				let species = metadata.species.replaceAll("_", " ");
				let domain = metadata.domain == "Mitochondrial" ? "Eukaryote organelle" : metadata.domain;
				let domainImg =  "/fig/" + metadata.domain + ".png";
				   
				let isPDB = metadata.pdb != "" && metadata.pdb != "NA";
				let methodImg =  "/fig/" + (isPDB ? "xray" : "alphafold") + ".png";
				let imgWidth = IS_MOBILE ? 28 : 14;
				$("#metadataDlg table").append(`<tr>
		  								<td colspan="2">
											<div style="text-align:center">` + getNameOfAccession(acc) + `</div>
											
										</td>
		  							</tr>`);
									//<div>` + metadata.desc + `</div>
				
				$("#metadataDlg table").append(`<tr>
		  								<th>Family</th>
		  								<td>` + metadata.name + `</td>
		  							</tr>`);
									
				$("#metadataDlg table").append(`<tr>
		  								<th>Length</th>
		  								<td>` + DATA.alignment[acc].replaceAll("-", "").length + ` aa</td>
		  							</tr>`);

				$("#metadataDlg table").append(`<tr>
		  								<th>Domain</th>
		  								<td>` + domain + ` <img src="` + domainImg + `" height="` + imgWidth + `px" style="vertical-align:middle"></img></td>
		  							</tr>`);
									
				$("#metadataDlg table").append(`<tr>
		  								<th>Phylum</th>
		  								<td>` + metadata.phylum + `</td>
		  							</tr>`);

				$("#metadataDlg table").append(`<tr>
							<th>Class</th>
							<td>` + metadata.class + `</td>
						</tr>`);


				$("#metadataDlg table").append(`<tr>
							<th>Order</th>
							<td>` + metadata.order + `</td>
						</tr>`);


					$("#metadataDlg table").append(`<tr>
							<th>Genus</th>
							<td>` + metadata.genus + `</td>
						</tr>`);
									
				$("#metadataDlg table").append(`<tr>
		  								<th>Species</th>
		  								<td><i>` + species + `</i></td>
		  							</tr>`);

				
									
				if (isPDB){
					
					$("#metadataDlg table").append(`<tr>
											<th>Structure</th>
											<td><a target="_blank" href="https://www.rcsb.org/structure/` + metadata.pdb + `">` + metadata.pdb.toUpperCase() + `</a> 
												<img src="` + methodImg + `" height="` + imgWidth + `px" style="vertical-align:middle"></img></td>
										</tr>`);
										
										
				}else{
											
					$("#metadataDlg table").append(`<tr>
											<th>Nucleotide</th>
											<td><a target="_blank" href="https://www.ncbi.nlm.nih.gov/nuccore/` + metadata.genbank + `">` + metadata.genbank + `</a></td>
										</tr>`);
									

					if (metadata.gene != null && metadata.gene != "" && metadata.gene != "NA"){
						$("#metadataDlg table").append(`<tr>
												<th>Gene</th>
												<td><a target="_blank" href="https://www.ncbi.nlm.nih.gov/gene/` + metadata.gene + `">` + metadata.gene + `</a></td>
											</tr>`);
					}

					if (metadata.protein != null && metadata.protein != "" && metadata.protein != "NA"){
						$("#metadataDlg table").append(`<tr>
												<th>Protein</th>
												<td><a target="_blank" href="https://www.ncbi.nlm.nih.gov/protein/` + metadata.protein + `">` + metadata.protein + `</a></td>
											</tr>`);
					}
										
										
					$("#metadataDlg table").append(`<tr>
											<th>Structure</th>
											<td><a target="_blank" href="data/dssp/` + acc + `">Download AlphaFold</a> 
													<img src="` + methodImg + `" height="` + imgWidth + `px" style="vertical-align:middle"></img></td>
										</tr>`);

									
							
		}
							
	

  
		
		$("#metadataDlg").show(100);
        evt.preventDefault();
		evt.stopPropagation()
      }, false);
	  
	  


    }
	
	// Disable right clicks on svg
	svg[0].addEventListener('contextmenu', function(evt) { 
		evt.preventDefault();
	}, false);


    // Secondary structure
    for (var seqNum = 0; seqNum < nseq; seqNum++){
      var acc = accessions[seqNum];
      var seq = alignment[acc];
      var y = SEC_HEIGHT*(seqNum+1.5)


      let sseGroup = drawSVGobj(svgContent, "g", { accession: acc, class: "domainSeq", select: "na" });


      // Find contiguous regions of helix, strand, loop, or gap
      var SSEs = [];
      var symbol = seq[0];
  	  if (symbol == "I" || symbol == "G") symbol = "H"; // Helix
  	  if (symbol == "S" || symbol == "B" || symbol == "T") symbol = "N"; // Loop etc
      var start = 0;
      for (var site = 1; site < nsites; site++){

          var symbol2 = seq[site];
      		if (symbol2 == "I" || symbol2 == "G") symbol2 = "H"; // Helix
      		if (symbol2 == "S" || symbol2 == "B"  || symbol2 == "T") symbol2 = "N"; // Loop etc




      		// Ignore all gaps / loops of length 1 within an sse for asthetic purposes

      		if (site < nsites-1 && (symbol2 == "-" || symbol2 == "N")){
      				let symbolNext = seq[site+1];
      				if (symbolNext == "I" || symbolNext == "G") symbolNext = "H"; // Helix
      				if (symbolNext == "S" || symbolNext == "B"  || symbolNext == "T") symbolNext = "N"; // Loop etc
      				if (symbol == symbolNext){
      					symbol2 = symbolNext;
      				}
      				
      		}

          if (symbol != symbol2){
              var sse = {seqNum: seqNum, start: start, stop: site-1, element: symbol};
              symbol = symbol2;
              start = site;
              SSEs.push(sse);
          }




      }


      // Plot them
      for (let i = SSEs.length-1; i >= 0; i --){



        let sse = SSEs[i];


        

        let startX = (sse.start)*SEC_WIDTH + ALN_LABEL_WIDTH;
        let endX = (sse.stop+1)*SEC_WIDTH + ALN_LABEL_WIDTH;
        let sseLen = sse.stop - sse.start + 1;

        let colourModifier = "";


        // Gap - do nothing
        if (sse.element == "-"){
          //console.log(acc, "gaps", sse);

        }

        // Helix
        else if ((sse.element == "H")  && sseLen >= MIN_SSE_LEN){

          //console.log(acc, "helix", sse);

          // Cylinder if long, rect if short
          if (sseLen > 1){


          	startX = startX + HELIX_CORNER_RADIUS/2;
          	endX = endX - HELIX_CORNER_RADIUS/2;

          	// Right circle
          	drawSVGobj(sseGroup, "ellipse", {cx: endX, cy: y, rx: HELIX_CORNER_RADIUS, ry: HELIX_WIDTH/2, style: "stroke-width:1px; stroke:black; fill:" + AA_COLS_2["H"] + colourModifier} );
       
       			// Rect
          	drawSVGobj(sseGroup, "rect", {x: startX, y: y-HELIX_WIDTH/2, width: endX-startX, height: HELIX_WIDTH, style: "stroke-width:0px; fill:" + AA_COLS_2["H"] + colourModifier} );
         
         		// Border around rect
	         	drawSVGobj(sseGroup, "line", {x1: startX, x2: endX, y1: y-HELIX_WIDTH/2, y2: y-HELIX_WIDTH/2, style: "stroke-width:1px; stroke: black"} );
	         	drawSVGobj(sseGroup, "line", {x1: startX, x2: endX, y1: y+HELIX_WIDTH/2, y2: y+HELIX_WIDTH/2, style: "stroke-width:1px; stroke: black"} );
         

         		// Left circle
	          drawSVGobj(sseGroup, "ellipse", {cx: startX, cy: y, rx: HELIX_CORNER_RADIUS, ry: HELIX_WIDTH/2, style: "stroke-width:0px; fill:white"} );
          	drawSVGobj(sseGroup, "ellipse", {cx: startX, cy: y, rx: HELIX_CORNER_RADIUS, ry: HELIX_WIDTH/2, style: "stroke-width:1px; stroke:black; fill:" + AA_COLS_2["H"] + "aa"} );
         
          }else{
          	 drawSVGobj(sseGroup, "rect", {rx: HELIX_CORNER_RADIUS, x: startX, y: y-HELIX_WIDTH/2, width: endX-startX, height: HELIX_WIDTH, style: "stroke-width:1px; stroke:black; fill:" + AA_COLS_2["H"] + colourModifier} );
         
          }

        }

        // Strand
        else if (sse.element == "E" && sseLen >= MIN_SSE_LEN){

          // Arrow
          var x2 = endX - STRAND_ARROW_HEAD_LEN_1;
          var x3 = endX - STRAND_ARROW_HEAD_LEN_2;


          // To avoid a tiny arrow head
          if (sse.stop - sse.start + 1 < 4){
            x2 = x2 + STRAND_ARROW_HEAD_LEN_1/2;
            x3 = x3 + STRAND_ARROW_HEAD_LEN_1/2;
          }


          var points = startX + "," + (y-STRAND_ARROW_BASE_WIDTH/2);
          points += " " + x2 + "," + (y-STRAND_ARROW_BASE_WIDTH/2);
          points += " " + x3 + "," + (y-STRAND_ARROW_HEAD_WIDTH/2);
          points += " " + endX + "," + y;
          points += " " + x3 + "," + (y+STRAND_ARROW_HEAD_WIDTH/2);
          points += " " + x2 + "," + (y+STRAND_ARROW_BASE_WIDTH/2);
          points += " " + startX + "," + (y+STRAND_ARROW_BASE_WIDTH/2);

          drawSVGobj(sseGroup, "polygon", {points: points, style: "stroke-width:1px; stroke:black; fill:" + AA_COLS_2["E"] + colourModifier} )

        }

        // Loop etc
        else{


          //console.log(acc, "loop", sse);

          drawSVGobj(sseGroup, "line", {x1: startX, x2: endX, y1: y, y2: y, style: "stroke-linecap:round; stroke-width:1px; stroke:#000000" + colourModifier} )

        }

      }


      //console.log("SSE", SSEs);


    }



    svg.show();


}


// Clear selection 
function deselectTaxa(refresh = false){
	
	// Clear domain selection text
	$("#secondary g.domainSeq").attr("select", "na");
	SELECTED_ACCESSION = null;
	if (refresh) selectSites();
	
}

// Clear selection 
function deselectSites(refresh = false){
	
	console.log("deselectSites");
	
	// Clear selecting rectangle
	$("svg").find(".selectionRect").remove();
	
	
	// Hide accession dialog
	$("#metadataDlg").hide(0);
	
	
	// Clear domain selection text 
	$("svg").find("text").attr("class", "deselected");
	
	
				
	// Clear selection on catalytic table / svg
	$('table.maptable td').removeClass("selected");
	$('table.maptable th').removeClass("selected");
	$('table.maptable td').removeClass("deselected");
	$('table.maptable th').removeClass("deselected");
	$("#catalyticSVG").children("g").children("g").attr("class", "");
	
	// Clear selection
	SELECTED_SITES.lower = -1;
	SELECTED_SITES.upper = -1;
	
	
	if (refresh) selectSites();
	
	
}


function selectSites(rescroll = true){
	
	// Domain architecture fade out other sequences
    if (SELECTED_ACCESSION != null){
      $("#secondary g.domainSeq").attr("select", "false");
      $(`#secondary g.domainSeq[accession="` + SELECTED_ACCESSION + `"]`).attr("select", "true");
      console.log("setting to deselected");
    }

	// Update canvas colours async
    setTimeout(function(){
		
		renderAlignment("alignment", true, "data/align.ali");
		renderAlignment("alignment2", false, "data/secondary.fasta");

		// Rescroll
		if (SELECTED_SITES.lower != -1 && rescroll){
		  var xpos = ALN_LABEL_WIDTH + NT_WIDTH*(SELECTED_SITES.lower) - $("#alignment").parent().width()/2;
		  $("#alignment").scrollLeft(xpos);
		  $("#alignment2").scrollLeft(xpos);
		}
    
	}, 1);


    // Update tertiary colour async
    setTimeout(function(){
      recolourTertiaries();
    }, 1);

}




var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();


createHiDPICanvas = function(w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can = document.createElement("canvas");
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
}

//Create canvas with the device resolution.
//var myCanvas = createHiDPICanvas(500, 250);



/*
	Find the position in alignment from ungapped position within one sequence
*/
function getAlignmentPosFromUngapped(accession, accPos){


	accPos = parseFloat(accPos);




	let accessions = DATA.accessions;
	let alignment = DATA.alignment;
	let nsites = alignment[accessions[0]].length;
	let siteSeq = 0;


	for (let siteAln = 0; siteAln < nsites; siteAln++){


		if (siteSeq == accPos){
			return siteAln;
		}

		let symbol = alignment[accession][siteAln];
		if (symbol != "-"){
			siteSeq++;
		}

	}

	return -1;


}




/*
* Draw a canvas of primary/secondary as an alignment 
*/
function renderAlignment(divID, isPrimary = true, downloadHref = ""){
	

	// Number of sequences
  var alignment = isPrimary ? DATA.alignment : DATA.secondary;
  var accessions = DATA.accessions;
  var nseq = accessions.length;
  var nsites = alignment[accessions[0]].length;

  var features = DATA.features;
	
	
	
	
	// Canvas size
	var w = NT_WIDTH*(nsites+2) + ALN_LABEL_WIDTH;
	var h = NT_HEIGHT*(nseq+1) + FEATURE_HEIGHT_ALN*4.1;
  var maxCanvasWidth = 20000;
  var ratio = Math.min(maxCanvasWidth / w, 2.5); 
	var canvas;
  if ($("#" + divID).find("canvas").length > 0){
    canvas = $("#" + divID).find("canvas").get(0);
  } else{
    canvas = createHiDPICanvas(w, h, ratio);
    $("#" + divID).append(canvas);
  }
	
	//var canvas = document.getElementById(canvasID);
	//Create canvas with a custom resolution.
	
	//canvas.width  = w;
	//canvas.height = h;
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.textBaseline = "middle";
	
	
	// Sequence labels
    for (var seqNum = 0; seqNum < nseq; seqNum++){
      let acc = accessions[seqNum];
	  	let accPrint = getNameOfAccession(acc);
      let y = NT_HEIGHT*(seqNum+1.5)
      let x = ALN_LABEL_WIDTH - 10;


      let cls = DATA.isAlpha[[acc]] ? "alpha" : "pdb";
  
  	  ctx.font = NT_FONT_SIZE + "px Source sans pro";
  	  ctx.textAlign = "end";
      ctx.fillStyle = "#366BA1";
  	  ctx.fillText(accPrint, x, y);


    }
	
	 // Site numbering
    for (var site = 0; site < nsites; site++){
      if ((site+1) % 10 == 1){
        var y = NT_HEIGHT*0.5;
        var x = NT_WIDTH*(site+0.25) + ALN_LABEL_WIDTH;
      	
      	//ctx.font = NT_FONT_SIZE + "px Courier New";
      	ctx.textAlign = "start";
        ctx.fillStyle = "black";
      	ctx.fillText(site+1, x, y);


        // Stroke
        ctx.beginPath();
        ctx.moveTo(x-NT_WIDTH/4, y+NT_HEIGHT/2);
        ctx.lineTo(x-NT_WIDTH/4, y-NT_HEIGHT/2);
        ctx.stroke();

      }
    }
	
	
	 // Draw the alignment
    for (var seqNum = 0; seqNum < nseq; seqNum++){

      var acc = accessions[seqNum];
      var seq = alignment[acc];
      var y = NT_HEIGHT*(seqNum+1.5)
      //console.log(acc, seq);
      for (var site = 0; site < nsites; site++){
        var x = NT_WIDTH*(site+0.5) + ALN_LABEL_WIDTH;
        var aa = seq[site];


        //if (aa == "-" && !isPrimary) continue;
        //if (aa == "-") continue;


      // Rect
      let col = "";
      let textCol = "#000000";
      if (aa == "-"){
        col = "#ffffff";
      }else if (isPrimary){
        col = AA_COLS[aa];
      }else{
		textCol = AA_FONT_COLS_2[aa];
        col = AA_COLS_2[aa];
      }


	

      // Selected site?
      if (SELECTED_SITES.lower != -1){
        if (site+1 < SELECTED_SITES.lower || site+1 > SELECTED_SITES.upper ){
            //textCol = "white";
            if (aa != "-") {
              col = col + "33";
              textCol = textCol + "aa";
            }
        }
      }

      // Selected accession?
      if (SELECTED_ACCESSION != null){
        if (acc != SELECTED_ACCESSION && col.length != 9){
          col = col + "33";
          textCol = textCol + "aa";
        }
      }
      
	  
		
		  
		ctx.beginPath();
		ctx.fillStyle = col;
		ctx.fillRect(x-NT_WIDTH/2, y-NT_HEIGHT/2, NT_WIDTH+0.5, NT_HEIGHT+0.5);
		ctx.stroke();
          
        


        // Text
        if (aa != "-"){
        	ctx.textAlign = "center";
        	ctx.fillStyle = textCol;
        	ctx.fillText(aa, x, y);
        }



      }


    }



	 // Rect around selected sites / taxon
	 if (SELECTED_SITES.lower != -1 || SELECTED_ACCESSION != null){
		 
		 
		 let x1 = 0;
		 let x2 = ALN_LABEL_WIDTH + NT_WIDTH*nsites;
		 let y1 = NT_HEIGHT;
		 let h = NT_HEIGHT*(nseq);
		 
		 
		 // Width of rect
		 if (SELECTED_SITES.lower != -1){
			 x1 = NT_WIDTH*(SELECTED_SITES.lower-1) + ALN_LABEL_WIDTH;
		     x2 = NT_WIDTH*(SELECTED_SITES.upper) + ALN_LABEL_WIDTH;
		 }
		 
		 
		 // Height of rect
		 if (SELECTED_ACCESSION != null){
			 
			 
			 let selectedSeqNr = -1;
			  for (let seqNum = 0; seqNum < nseq; seqNum++){
				if (accessions[seqNum] == SELECTED_ACCESSION){
				  selectedSeqNr = seqNum;
				  break;
				}
			  }
					 
			 y1 = (selectedSeqNr+1)*NT_HEIGHT;
			 h = NT_HEIGHT;
		 }

	  
		  ctx.beginPath();
		  ctx.fillStyle = col;
		  ctx.strokeRect(x1, y1, x2-x1, h);
		 
	 }




    // Features
    for (var feature in features){

      var range = features[feature].range;
      var level = features[feature].level;
      if (range == "") continue;
      range = range.split("-")
      let lowerRange = getAlignmentPosFromUngapped(features[feature].acc, range[0]);
      var y = NT_HEIGHT*(nseq+1) + FEATURE_HEIGHT_ALN*(level-0.5);
      var x1 = NT_WIDTH*(lowerRange) + ALN_LABEL_WIDTH;
      var x2 = x1 + NT_WIDTH;
      if (range.length == 2){
      	let upperRange = getAlignmentPosFromUngapped(features[feature].acc, range[1]);
        x2 = NT_WIDTH*(upperRange + 1) + ALN_LABEL_WIDTH;
      }


      var textCol = level == 1 || level >= 3 ? "black" : "white";
      var col = level == 1 ? LEVEL_1_COL : level == 2 ? LEVEL_2_COL : level == 3 ? LEVEL_3_COL : LEVEL_4_COL;
      var txt = feature;
      if (level == 0){
        txt = "*";
        textCol = "black";
        y = y + FEATURE_HEIGHT_ALN;
      }else{
		  
		  
		  ctx.beginPath();
		  ctx.fillStyle = col;
		  ctx.fillRect(x1-NT_WIDTH, y-FEATURE_HEIGHT_ALN/2, x2-x1, FEATURE_HEIGHT_ALN);
		  ctx.stroke();
		  ctx.strokeRect(x1-NT_WIDTH, y-FEATURE_HEIGHT_ALN/2, x2-x1, FEATURE_HEIGHT_ALN);

      }



  		// Text
  		ctx.fillStyle = textCol;
  		ctx.font = FEATURE_FONT_SIZE + "px Source sans pro";
  		ctx.fillText(txt, x1-NT_WIDTH + (x2-x1)/2, y);


    }


	if (!IS_MOBILE) {
		
		let aars = accessions[0].split("_");
		let downloadFileName = aars[0] + (isPrimary ? ".primary" : ".secondary") + ".fasta";

		// Toolbar after alignment
		if ($(`[for="` + divID + `"].alignmentToolBar`).length == 0){
		  $("#" + divID).after($("<div class='alignmentToolBar' for='" + divID + "'></div>"));
		}
		let toolbar = $(`[for="` + divID + `"].alignmentToolBar`);
		toolbar.html("");
		toolbar.append($(`<span><a href="` + downloadHref + `" download="` + downloadFileName + `">Download fasta</a> </span>`));
		toolbar.append($(`<span> Site: <span class="fader siteSel"></span> </span>`));
		toolbar.append($(`<span> Ungapped: <span class="fader ungappedSel"></span> </span>`));
		toolbar.append($(`<span> Accession: <span class="fader taxonSel"></span> </span>`));
		
		// SSE legend
		if (!isPrimary){
			toolbar.append($(`<span class="sseLegend" > <span style="color:` + AA_FONT_COLS_2["N"] + `; background-color:` + AA_COLS_2["N"] + `">N</span> - none </span>`));
			toolbar.append($(`<span class="sseLegend" > <span style="color:` + AA_FONT_COLS_2["S"] + `; background-color:` + AA_COLS_2["S"] + `">S</span> - bend </span>`));
			toolbar.append($(`<span class="sseLegend" > <span style="color:` + AA_FONT_COLS_2["T"] + `; background-color:` + AA_COLS_2["T"] + `">T</span> - H-bonded turn </span>`));
			toolbar.append($(`<span class="sseLegend" > <span style="color:` + AA_FONT_COLS_2["B"] + `; background-color:` + AA_COLS_2["B"] + `">B</span> - b-bridge </span>`));
			toolbar.append($(`<span class="sseLegend" > <span style="color:` + AA_FONT_COLS_2["I"] + `; background-color:` + AA_COLS_2["I"] + `">I</span> - p-helix </span>`));
			toolbar.append($(`<span class="sseLegend" > <span style="color:` + AA_FONT_COLS_2["G"] + `;background-color:` + AA_COLS_2["G"] + `">G</span> - 310 helix </span>`));
			toolbar.append($(`<span class="sseLegend" > <span style="color:` + AA_FONT_COLS_2["H"] + `;background-color:` + AA_COLS_2["H"] + `">H</span> - &alpha; helix </span>`));
			toolbar.append($(`<span class="sseLegend" > <span style="color:` + AA_FONT_COLS_2["E"] + `;background-color:` + AA_COLS_2["E"] + `">E</span> - extended &beta; strand </span><br>`));
			
		}



		$("#" + divID).after(toolbar);


		// Canvas mouse hover events
		canvas.onmousemove = function (e) {



			let rect = this.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top,
					i = 0, r;


			// Too far up/down
			if (y <= NT_HEIGHT || y > NT_HEIGHT*(nseq+1)) {
			  $("body").css("cursor", "auto");
			  toolbar.find(".fader").animate({ opacity: 0 }, SELECT_FONT_FADEOUT_TIME)
			  return;
			}      


			// Hover over accession
			if (x <= ALN_LABEL_WIDTH){
			  toolbar.find(".fader").animate({ opacity: 0 }, SELECT_FONT_FADEOUT_TIME)
			  $("body").css("cursor", "pointer");
			  return;
			}

			$("body").css("cursor", "crosshair");


			// Stop the fade out animation and bring back the opacity
			toolbar.find(".fader").stop(true);
			toolbar.find(".fader").css("opacity", 1);

			let siteNum = Math.floor((x - ALN_LABEL_WIDTH) / NT_WIDTH) + 1;
			let seqNum = Math.floor(y / NT_HEIGHT) - 1;
			let accHover = accessions[seqNum];
			let accHoverName = getNameOfAccession(accHover);
			let siteNumUngapped = alignment[accHover].substring(0, siteNum).replaceAll("-", "").length;
		   // console.log(accessions[seqNum], siteNum);


			  toolbar.find(".siteSel").html(siteNum);
			  toolbar.find(".ungappedSel").html(siteNumUngapped);
			  toolbar.find(".taxonSel").html(accHoverName);


			
			//toolbar.html("Site " + siteNum + " ungapped: " + siteNumUngapped + " of " + accHover.replace(".pdb", ""));


		};


		// Click on accession to select it
		canvas.onmousedown = function (e) {


			let rect = this.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top,
					i = 0, r;


			// Click on accession
			if (x <= ALN_LABEL_WIDTH){


			  let seqNum = Math.floor(y / NT_HEIGHT) - 1;
			  let a = accessions[seqNum];

			  var directory = DATA.directories[a];
			  directory = directory.replace("structures/", "dssp/");
			  
			  let sln = directory.split("/");
			  sln = sln[sln.length-1];
			  
			  // Already selected? Deselect it
				if (SELECTED_ACCESSION == sln){
					deselectTaxa(true);
					return;
				}
			  
			  // Select it
			  deselectTaxa();
			  SELECTED_ACCESSION = sln;
			  selectSites(false);
			  if (!PAIRWISE) directory = "data/" + directory;
			  renderTertiary(directory);

			}else{
			   deselectSites();
			  deselectTaxa(true);
			}




		}

		canvas.onmouseleave = function (e) {
			$("body").css("cursor", "auto");
			toolbar.find(".fader").animate({ opacity: 0 }, SELECT_FONT_FADEOUT_TIME)
		};

	}

}



function loadAllFiles(resolve = function() { }){

  DATA = {};

  // Read info json
  fetch("info.json").then(response => response.text()).then(text => renderInfo(text, resolve));


}


function loadAcccessionMetadata(text, resolve = function() { }){
	
	
	
	text = text.replaceAll("\n", "").replaceAll("\r", "");
	let json = JSON.parse(text);
	console.log(json);
	DATA.metadata = json;
	
	// features[feature] = {range: range, level: level};

	// Load alignment
  fetch("data/align.ali").then(response => response.text()).then(text => loadAlignment(text, resolve));
	
}



function loadAlignment(fasta, resolve = function() { }){

  //console.log("loading alignment", fasta)
  var lines = fasta.split("\n");
  var sequences = {};
  var acc = "seq";
  var dir = "";
  var accessions = [];
  var directories = {};
  var isAlpha = {};
  var urls = {};
  for (var i = 0; i < lines.length; i ++){

    var line = lines[i];

    if (line.trim() == "") continue;

    if (line[0] == ">"){
      dir = line.substring(1, line.length).trim();
      var acc_split = dir.split("/");
      //acc = acc.replace("structures/", "");
      acc = acc_split[acc_split.length -1];
    }else{
      sequences[acc] = line;
      directories[acc] = dir;
      accessions.push(acc);

      // PDB or genbank?
      var accSplit = acc.split(".");
      var url = "";
      if (accSplit.length >= 4 && accSplit[1].length == 1){

        // Genbank
         var accession = accSplit[3];
         //url = "https://www.ncbi.nlm.nih.gov/nuccore/" + accession;
         url = "data/structures/" + acc;
         isAlpha[acc] = true;

      }else{

        // PDB
        var pdb = acc.split("_")[2];
        url = "https://www.rcsb.org/structure/" + pdb;
        isAlpha[acc] = false;

      }
      urls[acc] = url;


    }

  }


  DATA.isAlpha = isAlpha;
  DATA.urls = urls;
  DATA.accessions = accessions;
  DATA.directories = directories;
  DATA.alignment = sequences;


  // Load secondary structure alignment
  fetch("data/secondary.fasta").then(response => response.text()).then(text => loadSecondaryStructureAlignment(text, resolve));


}



function loadSecondaryStructureAlignment(fasta, resolve = function() { }){

  var lines = fasta.split("\n");
  var sequences = {};
  var acc = "seq";
  var dir = "";
  for (var i = 0; i < lines.length; i ++){

    var line = lines[i];

    if (line.trim() == "") continue;

    if (line[0] == ">"){
      dir = line.substring(1, line.length).trim();
      var acc_split = dir.split("/");
      acc = acc_split[acc_split.length -1];
    }else{
      sequences[acc] = line;
    }

  }

  DATA.secondary = sequences;

  // All done
  resolve();

}


function loadStructures(listOfStructures, resolve){


    // Load dssp files with secondary structure
    var lines = listOfStructures.split("\n");
    var structures = [];
    for (var i = 0; i < lines.length; i ++){

      var fileName = lines[i];
      if (fileName == "" || fileName[0] == "#") continue;
      fileName = fileName.replace("structures/", "dssp/");
      fileName = "data/" + fileName + ".dssp";

      structures.push(fileName);

    }



    DATA.secondary = {};
    loadStructure(structures, resolve);



}





// Recursively load a list of pdb structures in dssp
function loadStructure(structures, resolve = function() { } ){

  if (structures.length == 0){
    resolve();
    return;
  }

  var fileName = structures.pop();


  fetch(fileName).then(response => response.text()).then(text => {

    console.log("loading pdb", fileName);



    // Find the table
    var lines = text.split("\n");
    var firstLine = -1;
    for (var i = 0; i < lines.length; i ++){

      var line = lines[i];
      if (line.match("#  RESIDUE AA STRUCTURE")){
        //console.log("line 1 is", line);
        firstLine = i;
        break;
      }

    }

    if (firstLine != -1){


      //var acc = fileName.replace("data/dssp/", "").replace(".dssp", "");
      var acc_split = fileName.split("/");
      //acc = acc.replace("structures/", "");
      var acc = acc_split[acc_split.length -1];
      acc = acc.replace(".dssp", "");

      console.log(acc);

      // Put secondary stucture into alignment
      var sequence = "";
      var alignmentSequence = DATA.alignment[acc];
      var siteNum = 0;
      var nMissingRegions = 0; // Missing regions of pdb residues result in an addition line inserted, with symbol '!'
      for (var alnSiteNum = 0; alnSiteNum < alignmentSequence.length; alnSiteNum++){

        var alnChar = alignmentSequence[alnSiteNum];
        if (alnChar == "-"){

          sequence += "-";
        }else{


          var line = lines[firstLine + siteNum + nMissingRegions];
          var aa = line.substring(13, 14);
          while (aa == "!"){
            nMissingRegions ++;
            line = lines[firstLine + siteNum + nMissingRegions];
            aa = line.substring(13, 14);
          }
          var ss = line.substring(16, 17);
          if (ss == " ") ss = "N";
          sequence += ss;
          siteNum ++;

        }
      }


      DATA.secondary[acc] = sequence;

      //console.log(acc, "has 2nd structure", sequence);


    }else{
      console.log("warning cannot load dssp table for", fileName)
    }


    loadStructure(structures, resolve);

  });



}


  function drawSVGobj(svg, type, attr, val = null){

    //console.log("attr", attr);
    var newObj = document.createElementNS('http://www.w3.org/2000/svg', type);


    for (var a in attr){
      if (a == "text_anchor") newObj.setAttribute("text-anchor", attr[a]);
      else if (a == "stop_color") newObj.setAttribute("stop-color", attr[a]);
      else if (a == "alignment_baseline") newObj.setAttribute("alignment-baseline", attr[a]);
      else if (a == "stroke_dasharray") newObj.setAttribute("stroke-dasharray", attr[a]);
      else newObj.setAttribute(a, attr[a]);
    }
    if (val != null) newObj.innerHTML = val;
    newObj.setAttribute("animatable", "true");


    // Set some of the styles as attributes because safari and IE do not like styles for svgs
    var styles = getComputedStyle(newObj);
    //if (styles.fill != null) newObj.setAttribute("fill", styles.fill);
    if (styles.stroke != null) newObj.setAttribute("stroke", styles.stroke);
    if (styles["stroke-width"] != null) newObj.setAttribute("stroke-width", styles["stroke-width"]);
    //console.log(styles["stroke-width"]);

    //window.requestAnimationFrame(function() {
    svg.append(newObj);
    $(newObj).hide().fadeIn(FADE_TIME); 
    
    
    
    
    return newObj;

  } 
