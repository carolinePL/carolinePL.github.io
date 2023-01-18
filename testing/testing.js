
SVG_WIDTH = 1000;
SVG_HEIGHT = 1000;

CATALYTIC_DOMAIN_WIDTH = 300;
CATALYTIC_DOMAIN_HEIGHT = 130;
CATALYTIC_DOMAIN_XPAD = 10;
CATALYTIC_DOMAIN_YPAD = 20;
CATALYTIC_LOOP_HEIGHT = 20;
CATALYTIC_DOMAIN_STRAND_ARROW_HEAD_LEN_1 = 12;
CATALYTIC_DOMAIN_STRAND_ARROW_HEAD_LEN_2 = 13;
CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP = 0.58;
CATALYTIC_DOMAIN_HELIX_WIDTH_PROP = 0.8;
CATALYTIC_DOMAIN_CUBIC_RIGHT_DX = 0;
CATALYTIC_DOMAIN_LOOP_WIDTH = 2;
CATALYTIC_DOMAIN_HELIX_CORNER_RADIUS = 2.5;
CATALYTIC_DOMAIN_FONT_SIZE = 16;
CATALYTIC_DOMAIN_MOTIF_FONT_SIZE = 8;
CATALYTIC_DOMAIN_ARROW_BG_WIDTH = 1;

MAIN_ARROW_LWD = 2;

AA_COLS_2 = {E: "#FFC20A", H: "#0C7BDC", G: "#0C7BDC", I: "#0C7BDC", T:"#d3d3d3", S: "#d3d3d3",  B: "#d3d3d3",  N: "#ffffff"};





// Draw a class I or II catalytic domain layout
function drawTree(classNr){

		let json = null;
		
		let className = classNr == 1 ? "I" : "II";

    // Prepare html and svg
    $("#catalyticDomainDIV").append("<svg id='catalyticSVG' height=0 width=0 overflow='auto'></svg>")


   

    // Populate the svg
    let svg = $("#catalyticSVG");
    svg.width(SVG_WIDTH);
    svg.height(SVG_HEIGHT);



    

    // Prepare colurs
		let motifColBase = "#ba2e00"; 
		let highlightColBase = "#008cba"; 

    // Define colour gradients
    let defs = $(drawSVGobj(svg, "defs", {} ));
    let helixGradient = $(drawSVGobj(defs, "linearGradient", {id: "helixGradient"} ));
    $(drawSVGobj(helixGradient, "stop", {offset: "0%", stop_color: AA_COLS_2["H"] + "99"} ));
    $(drawSVGobj(helixGradient, "stop", {offset: "100%", stop_color: AA_COLS_2["H"] + "cc"} ));
    let helixBackgroundGradient = $(drawSVGobj(defs, "linearGradient", {id: "helixBackgroundGradient"} ));
    $(drawSVGobj(helixBackgroundGradient, "stop", {offset: "0%", stop_color: "#111111aa"} ));
    $(drawSVGobj(helixBackgroundGradient, "stop", {offset: "100%", stop_color: "#111111bb"} ));
    let strandGradient = $(drawSVGobj(defs, "linearGradient", {id: "strandGradient"} ));
    $(drawSVGobj(strandGradient, "stop", {offset: "0%", stop_color: AA_COLS_2["E"] + "77"} ));
    $(drawSVGobj(strandGradient, "stop", {offset: "100%", stop_color: AA_COLS_2["E"] + "cc"} ));
    let strandBackgroundGradient = $(drawSVGobj(defs, "linearGradient", {id: "strandBackgroundGradient"} ));
    $(drawSVGobj(strandBackgroundGradient, "stop", {offset: "0%", stop_color: "#111111aa"} ));
    $(drawSVGobj(strandBackgroundGradient, "stop", {offset: "100%", stop_color: "#111111ee"} ));
    let motifGradient = $(drawSVGobj(defs, "linearGradient", {id: "motifGradient"} ));
    $(drawSVGobj(motifGradient, "stop", {offset: "0%", stop_color: motifColBase + "99"} ));
    $(drawSVGobj(motifGradient, "stop", {offset: "100%", stop_color: motifColBase + "ee"} ));
    let highlightGradient = $(drawSVGobj(defs, "linearGradient", {id: "highlightGradient"} ));
    $(drawSVGobj(highlightGradient, "stop", {offset: "0%", stop_color: highlightColBase + "11"} ));
    $(drawSVGobj(highlightGradient, "stop", {offset: "100%", stop_color: highlightColBase + "44"} ));


    // Arrow head
    let arrowheadVert = $(drawSVGobj(defs, "marker", {id: "arrowheadVert", markerWidth: 9, markerHeight: 9,  refX: "3.5", refY: "0"} ));
    $(drawSVGobj(arrowheadVert, "polygon", {points: "0 0, 3.5 9, 7 0"} ));
    let arrowheadHori = $(drawSVGobj(defs, "marker", {id: "arrowheadHori", markerWidth: 9, markerHeight: 9,  refX: "0", refY: "3.5"} ));
    $(drawSVGobj(arrowheadHori, "polygon", {points: "0 0, 9 3.5, 0 7"} ));



    let helixCol = "url(#helixGradient)";
    let strandCol = "url(#strandGradient)";
    let motifCol = "url(#motifGradient)";
    let highlightCol = "url(#highlightGradient)";
    let helixBgCol  = "url(#helixBackgroundGradient)";
    let strandBgCol  = "url(#strandBackgroundGradient)";


    let dy = CATALYTIC_DOMAIN_HEIGHT + 2*CATALYTIC_DOMAIN_YPAD;
    let dx = CATALYTIC_DOMAIN_WIDTH + 2*CATALYTIC_DOMAIN_XPAD;

    // Vertical arrow line
    drawSVGobj(svg, "line", {x1: 50 + CATALYTIC_DOMAIN_FONT_SIZE/2, x2: 50 + CATALYTIC_DOMAIN_FONT_SIZE/2, y1: 0, y2: 5*dy, marker_end:"url(#arrowheadVert)", style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );

    
    let titleFontSize = CATALYTIC_DOMAIN_FONT_SIZE*0.8;

    if (classNr == 2){
    	 drawClass2Domain(50, 0, svg, motifColBase, "Protozyme", {box: true, protozyme: true});
    	 drawClass2Domain(50, dy, svg, motifColBase, "Urzyme", {box: true, urzyme: true});


    	 // Ala/Gly
    	 drawSVGobj(svg, "line", {x1: 50 + CATALYTIC_DOMAIN_FONT_SIZE/2, x2: 50+1.1*dx, y1: 2*dy, y2: 2*dy, style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawClass2Domain(50, 2*dy, svg, motifColBase, "Six-stranded fold", {box: true});
    	 drawSVGobj(svg, "line", {x1: 50+1*dx, x2: 50+1*dx + CATALYTIC_DOMAIN_FONT_SIZE/2, y1: 2*dy, y2: 2*dy+CATALYTIC_DOMAIN_YPAD*1, marker_end:"url(#arrowheadVert)", style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawSVGobj(svg, "line", {x1: 50+1.1*dx, x2: 50+1.1*dx + CATALYTIC_DOMAIN_FONT_SIZE/2, y1: 2*dy, y2: 2*dy+CATALYTIC_DOMAIN_YPAD*1, marker_end:"url(#arrowheadVert)", style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawSVGobj(svg, "text", {transform:"translate(" + (50+1*dx+ CATALYTIC_DOMAIN_FONT_SIZE/2) + ", " + (2*dy+2*CATALYTIC_DOMAIN_YPAD) + ") rotate(-90)", style: "font-size:" + titleFontSize + "px; text-anchor:end; dominant-baseline:central;"}, "GlyRS-B");
    	 //drawSVGobj(svg, "text", {transform:"translate(" + (50+1.1*dx+ CATALYTIC_DOMAIN_FONT_SIZE/2) + ", " + (2*dy+3*CATALYTIC_DOMAIN_YPAD) + ") rotate(-90)", style: "font-size:" + titleFontSize + "px; text-anchor:end; dominant-baseline:central;"}, "AlaRS");
    	 drawClass2Domain(50+1.1*dx, 2*dy, svg, motifColBase, "AlaRS", {L6: true, insertName: "A"});


    	 // Lys / asp etc
    	 drawSVGobj(svg, "line", {x1: 50 + CATALYTIC_DOMAIN_FONT_SIZE/2, x2: 50+1.3*dx, y1: 3*dy, y2: 3*dy, style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawClass2Domain(50, 3*dy, svg, motifColBase, "Plus hairpin", {box: true, hairpin: true});
    	 drawSVGobj(svg, "line", {x1: 50+1*dx, x2: 50+1*dx + CATALYTIC_DOMAIN_FONT_SIZE/2, y1: 3*dy, y2: 3*dy+CATALYTIC_DOMAIN_YPAD*1, marker_end:"url(#arrowheadVert)", style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawSVGobj(svg, "line", {x1: 50+1.1*dx, x2: 50+1.1*dx + CATALYTIC_DOMAIN_FONT_SIZE/2, y1: 3*dy, y2: 3*dy+CATALYTIC_DOMAIN_YPAD*1, marker_end:"url(#arrowheadVert)", style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawSVGobj(svg, "line", {x1: 50+1.2*dx, x2: 50+1.2*dx + CATALYTIC_DOMAIN_FONT_SIZE/2, y1: 3*dy, y2: 3*dy+CATALYTIC_DOMAIN_YPAD*1, marker_end:"url(#arrowheadVert)", style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawSVGobj(svg, "line", {x1: 50+1.3*dx, x2: 50+1.3*dx + CATALYTIC_DOMAIN_FONT_SIZE/2, y1: 3*dy, y2: 3*dy+CATALYTIC_DOMAIN_YPAD*1, marker_end:"url(#arrowheadVert)", style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawSVGobj(svg, "text", {transform:"translate(" + (50+1*dx+ CATALYTIC_DOMAIN_FONT_SIZE/2) + ", " + (3*dy+2*CATALYTIC_DOMAIN_YPAD) + ") rotate(-90)", style: "font-size:" + titleFontSize + "px; text-anchor:end; dominant-baseline:central;"}, "AsnRS");
    	 drawSVGobj(svg, "text", {transform:"translate(" + (50+1.1*dx+ CATALYTIC_DOMAIN_FONT_SIZE/2) + ", " + (3*dy+2*CATALYTIC_DOMAIN_YPAD) + ") rotate(-90)", style: "font-size:" + titleFontSize + "px; text-anchor:end; dominant-baseline:central;"}, "AsxRS");
    	 drawSVGobj(svg, "text", {transform:"translate(" + (50+1.2*dx+ CATALYTIC_DOMAIN_FONT_SIZE/2) + ", " + (3*dy+2*CATALYTIC_DOMAIN_YPAD) + ") rotate(-90)", style: "font-size:" + titleFontSize + "px; text-anchor:end; dominant-baseline:central;"}, "AspRS");
    	 drawSVGobj(svg, "text", {transform:"translate(" + (50+1.3*dx+ CATALYTIC_DOMAIN_FONT_SIZE/2) + ", " + (3*dy+2*CATALYTIC_DOMAIN_YPAD) + ") rotate(-90)", style: "font-size:" + titleFontSize + "px; text-anchor:end; dominant-baseline:central;"}, "LysRS-II");
    	




    	 // Remainder
    	 drawSVGobj(svg, "line", {x1: 50 + CATALYTIC_DOMAIN_FONT_SIZE/2, x2: 50+2.1*dx, y1: 4*dy, y2: 4*dy, style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawClass2Domain(50, 4*dy, svg, motifColBase, "Plus gates", {box: true, hairpin: true, gates: true});
    	 drawSVGobj(svg, "line", {x1: 50+1*dx, x2: 50+1*dx + CATALYTIC_DOMAIN_FONT_SIZE/2, y1: 4*dy, y2: 4*dy+CATALYTIC_DOMAIN_YPAD*1, marker_end:"url(#arrowheadVert)", style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawSVGobj(svg, "line", {x1: 50+1.1*dx, x2: 50+1.1*dx + CATALYTIC_DOMAIN_FONT_SIZE/2, y1: 4*dy, y2: 4*dy+CATALYTIC_DOMAIN_YPAD*1, marker_end:"url(#arrowheadVert)", style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawSVGobj(svg, "line", {x1: 50+2.1*dx, x2: 50+2.1*dx + CATALYTIC_DOMAIN_FONT_SIZE/2, y1: 4*dy, y2: 4*dy+CATALYTIC_DOMAIN_YPAD*1, marker_end:"url(#arrowheadVert)", style: "stroke-width:" + MAIN_ARROW_LWD + "px; stroke-linecap: round; stroke:black"} );
    	 drawSVGobj(svg, "text", {transform:"translate(" + (50+1*dx+ CATALYTIC_DOMAIN_FONT_SIZE/2) + ", " + (4*dy+2*CATALYTIC_DOMAIN_YPAD) + ") rotate(-90)", style: "font-size:" + titleFontSize + "px; text-anchor:end; dominant-baseline:central;"}, "Rest of class II");
    	 drawClass2Domain(50+1.1*dx, 4*dy, svg, motifColBase, "HisRS", {hairpin: true, gates: true, L6: true, insertName: "H"});
    	 drawClass2Domain(50+2.1*dx, 4*dy, svg, motifColBase, "ThrRS", {hairpin: true, gates: true, L6: true, insertName: "T"});
    	


		


    }
   



  }




function drawClass2Domain(startX, startY, svg, motifColBase, title = null, features = {}, includeText=false){


		let groupFig = $(drawSVGobj(svg, "g", {} ));

  	// Top and bottom layers
		let bottomLayer = $(drawSVGobj(groupFig, "g", {style:""} )); 
		let topLayer = $(drawSVGobj(groupFig, "g", {style:""} )); 
	

		let startYEff = startY;

		let json = null;

    let helixCol = "url(#helixGradient)";
    let strandCol = "url(#strandGradient)";
    let motifCol = "url(#motifGradient)";
    let highlightCol = "url(#highlightGradient)";
    let helixBgCol  = "url(#helixBackgroundGradient)";
    let strandBgCol  = "url(#strandBackgroundGradient)";


      // Ele width and height
    let nElementsHorizontal = 9;
    let nElementsVertical = 3;
    let eleWidth = (CATALYTIC_DOMAIN_WIDTH-CATALYTIC_DOMAIN_XPAD) / (nElementsHorizontal+1) - CATALYTIC_DOMAIN_XPAD;
    


    let isProtozyme = features.protozyme != null && features.protozyme == true;
    let isUrzyme = features.urzyme != null && features.urzyme == true;
    let hasHairpin = features.hairpin != null && features.hairpin == true;
    let hasgates = features.gates != null && features.gates == true;
    let L6insert = features.L6 != null && features.L6 == true;
    let iStart = 0;
    let iStop = 9;
    if (isProtozyme){
    	iStart = 2;
    	iStop = 4;
    }else if (isUrzyme){
    	iStart = 2;
    	iStop = 6;
    }

    if (hasHairpin) startYEff += 1*CATALYTIC_DOMAIN_YPAD;
    if (hasgates) startYEff += 2*CATALYTIC_DOMAIN_YPAD;

    // Draw box around
    let xMin = 1e10;
    let xMax = 0;


      // 6 antiparallel strands and 3 helices
      let odd = false;
	  	let oddLoop = false;
    for (let i = iStart; i <= iStop ; i++){

				let eleHeight = (CATALYTIC_DOMAIN_HEIGHT-4*CATALYTIC_DOMAIN_YPAD);

        let x = CATALYTIC_DOMAIN_XPAD + (CATALYTIC_DOMAIN_XPAD+eleWidth)*(i) + startX;
        let y = CATALYTIC_DOMAIN_YPAD*2 + startYEff;
		


		// Loop
		if (i <= 9){
			
			
			let nr = i;
			if (i == 5) nr = 8;
			if (i == 6) nr = 7;
			if (i == 7) nr = 6;
			if (i == 8) nr = 5;
			
			let eleName = "L" + nr;
			let xMid = x;
			let yLoop = y;
			

			let endPoint, control1, control2 = [];
			let ylab = y;
			let xlab = x;
			let onTop = false;

			let pathCol = "black";

			// N term
			if (i == 0){
				eleName = "N";
				yLoop = y+eleHeight;
				xMid = CATALYTIC_DOMAIN_XPAD + (CATALYTIC_DOMAIN_XPAD+eleWidth)*1  + startX;
				endPoint = [xMid, yLoop+3*CATALYTIC_LOOP_HEIGHT/4];
				control1 = [xMid-CATALYTIC_DOMAIN_XPAD/3, yLoop+1*(CATALYTIC_LOOP_HEIGHT)/4];
				control2 = [xMid+CATALYTIC_DOMAIN_XPAD/3, yLoop+2*(CATALYTIC_LOOP_HEIGHT)/4];	
				xlab = xMid;
				ylab = yLoop+CATALYTIC_LOOP_HEIGHT + 5;
			}


			// N term protozyme/urzyme
			else if ((isProtozyme || isUrzyme) && i == iStop){
				eleName = "N";
				yLoop = y;
				pathCol = motifColBase;
				xMid = CATALYTIC_DOMAIN_XPAD + (CATALYTIC_DOMAIN_XPAD+eleWidth)*2 + startX;
				endPoint = [xMid, yLoop-3*CATALYTIC_LOOP_HEIGHT/4];
				control1 = [xMid-CATALYTIC_DOMAIN_XPAD/3, yLoop-1*(CATALYTIC_LOOP_HEIGHT)/4];
				control2 = [xMid+CATALYTIC_DOMAIN_XPAD/3, yLoop-2*(CATALYTIC_LOOP_HEIGHT)/4];	
				xlab = xMid;
				ylab = yLoop-CATALYTIC_LOOP_HEIGHT - 5;
				onTop = true;


			}
			
			// C term
			else if (i == 9){
				eleName = "C";
				yLoop = y;
				xMid = CATALYTIC_DOMAIN_XPAD + (CATALYTIC_DOMAIN_XPAD+eleWidth)*5 + startX;
				endPoint = [xMid, yLoop-3*CATALYTIC_LOOP_HEIGHT/4];
				control1 = [xMid-CATALYTIC_DOMAIN_XPAD/3, yLoop-1*(CATALYTIC_LOOP_HEIGHT)/4];
				control2 = [xMid+CATALYTIC_DOMAIN_XPAD/3, yLoop-2*(CATALYTIC_LOOP_HEIGHT)/4];	
				xlab = xMid;
				ylab = yLoop-CATALYTIC_LOOP_HEIGHT - 5;
				onTop = true;
				
			}

			// C term protozyme
			else if ((isProtozyme || isUrzyme) && i == iStop-1){
				eleName = "C";
				yLoop = y;
				xMid = CATALYTIC_DOMAIN_XPAD + (CATALYTIC_DOMAIN_XPAD+eleWidth)*i + startX;
				endPoint = [xMid, yLoop-3*CATALYTIC_LOOP_HEIGHT/4];
				control1 = [xMid-CATALYTIC_DOMAIN_XPAD/3, yLoop-1*(CATALYTIC_LOOP_HEIGHT)/4];
				control2 = [xMid+CATALYTIC_DOMAIN_XPAD/3, yLoop-2*(CATALYTIC_LOOP_HEIGHT)/4];	
				xlab = xMid;
				ylab = yLoop-CATALYTIC_LOOP_HEIGHT - 5;
				onTop = true;
				
			}

			
			// Long loop from S2 to H3
			else if (i == 4 && !isUrzyme){
				yLoop = y+eleHeight;
				endPoint = [CATALYTIC_DOMAIN_XPAD + (CATALYTIC_DOMAIN_XPAD+eleWidth)*9  + startX, yLoop];
				let bigLoopHeightRel = 2.5;
				if (hasgates || L6insert) bigLoopHeightRel = 4;
				control1 = [xMid-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX, yLoop+bigLoopHeightRel*CATALYTIC_LOOP_HEIGHT];
				control2 = [endPoint[0]-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX, yLoop+bigLoopHeightRel*CATALYTIC_LOOP_HEIGHT];	
				ylab = yLoop+2*CATALYTIC_LOOP_HEIGHT-20;
				xlab = (xMid+endPoint[0])/2-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX ;
				oddLoop = !oddLoop;
				
			}
			
			
			// Standard odd loop (top)
			else if (oddLoop){
				endPoint = [xMid + CATALYTIC_DOMAIN_XPAD+eleWidth, yLoop];
				control1 = [xMid-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX, yLoop-CATALYTIC_LOOP_HEIGHT];
				control2 = [endPoint[0]-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX, yLoop-CATALYTIC_LOOP_HEIGHT];
				xlab = (xMid+endPoint[0])/2-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX;
				ylab = yLoop-CATALYTIC_LOOP_HEIGHT-3;
				onTop = true;
			}
			
			// Standard even loop (bottom)
			else{
				yLoop = y+eleHeight;
				endPoint = [xMid + CATALYTIC_DOMAIN_XPAD+eleWidth, yLoop];
				control1 = [xMid-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX, yLoop+CATALYTIC_LOOP_HEIGHT];
				control2 = [endPoint[0]-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX, yLoop+CATALYTIC_LOOP_HEIGHT];
				xlab = (xMid+endPoint[0])/2-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX;
				ylab = yLoop+CATALYTIC_LOOP_HEIGHT+3;
			}
			

			// Start and stop positions in alignment
			let eleStart = json == null ? -1 : json["median_" + eleName + ".start"];
			let eleStop = json == null ? -1 : json["median_" + eleName + ".end"];
			if (eleStart == null) eleStart = -1;
			if (eleStop == null) eleStop = -1;
			
			let d = "M " + xMid + " " + yLoop  + " C " + control1[0] + " " + control1[1] + ", " + control2[0] + " " + control2[1] + ", " + endPoint[0] + " " + endPoint[1];
			let group;
			if (eleName == "N" || eleName == "C"){
				group = $(drawSVGobj(onTop ? topLayer : bottomLayer, "g", {element: eleName, style:""} )); // No click events
			}else {
				group = $(drawSVGobj(onTop ? topLayer : bottomLayer, "g", {element: eleName, start:eleStart, end:eleStop, style:"cursor:pointer"} ));
			}


			// L1 is motif 1
			if (eleName == "L1"){
				pathCol = motifColBase;
				if (includeText) drawSVGobj(group, "text", {x: xlab, y: yLoop, style: "font-size:" + CATALYTIC_DOMAIN_MOTIF_FONT_SIZE + "px; text-anchor:middle; dominant-baseline:central; font-weight:bold; fill:" + motifColBase + "; "}, "M1");
			}


	
			if (eleName == "L1" && hasHairpin){


					// Draw a hairpin instead of a loop
					let hpx1 = x;
					let hpx2 = CATALYTIC_DOMAIN_XPAD + (CATALYTIC_DOMAIN_XPAD+eleWidth)*(i+1) + startX;



					let loopHeight = eleHeight / 4;
					let strandHeight = eleHeight / 2;

					// Gate 1? 
					let gateHeight = 0;
					let loopGateHeight = 0;
					if (hasgates){

						gateHeight = strandHeight;
						loopGateHeight = loopHeight;


						// Straight loop 
						drawSVGobj(group, "line", {x1: hpx1, x2: hpx1, y1: y-loopGateHeight, y2: y, style: "stroke-width:" + CATALYTIC_DOMAIN_LOOP_WIDTH + "px; stroke:" + motifColBase + "; fill:transparent; stroke-linecap:round"} );


						// Kinked helix
						drawHelix(hpx1, y-loopGateHeight-gateHeight, gateHeight, eleWidth, helixCol, helixBgCol, group, "Gate1", includeText);


					}


					// Straight loop 1
					drawSVGobj(group, "line", {x1: hpx1, x2: hpx1, y1: y-gateHeight-loopGateHeight, y2: y-loopHeight-gateHeight-loopGateHeight, style: "stroke-width:" + CATALYTIC_DOMAIN_LOOP_WIDTH + "px; stroke:" + (hasgates ? "black" : motifColBase) + "; fill:transparent; stroke-linecap:round"} );

					// Strand 1
					drawStrand(hpx1, y-loopHeight-strandHeight-gateHeight-loopGateHeight, strandHeight, eleWidth, true, strandCol, strandBgCol, motifCol, group, "HP1")

					// Curved loop
					yLoop = y-loopHeight-strandHeight-gateHeight-loopGateHeight;
					endPoint = [xMid + CATALYTIC_DOMAIN_XPAD+eleWidth, yLoop];
					control1 = [xMid-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX, yLoop-CATALYTIC_LOOP_HEIGHT];
					control2 = [endPoint[0]-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX, yLoop-CATALYTIC_LOOP_HEIGHT];
					d = "M " + xMid + " " + yLoop  + " C " + control1[0] + " " + control1[1] + ", " + control2[0] + " " + control2[1] + ", " + endPoint[0] + " " + endPoint[1];
					drawSVGobj(group, "path", {d: d, style: "stroke-width:" + CATALYTIC_DOMAIN_LOOP_WIDTH + "px; stroke:" + "black" + "; fill:transparent; stroke-linecap:round"} );
		

					// Strand 2
					drawStrand(hpx2, y-loopHeight-strandHeight-gateHeight-loopGateHeight, strandHeight, eleWidth, false, strandCol, strandBgCol, motifCol, group, "HP1")

					// Straight loop 2
					drawSVGobj(group, "line", {x1: hpx2, x2: hpx2, y1: y-gateHeight-loopGateHeight-loopHeight, y2: y, style: "stroke-width:" + CATALYTIC_DOMAIN_LOOP_WIDTH + "px; stroke:" + "black" + "; fill:transparent; stroke-linecap:round"} );
			

			} 

			else if (eleName == "L8" && hasgates){

				let gate2x = CATALYTIC_DOMAIN_XPAD + (CATALYTIC_DOMAIN_XPAD+eleWidth)*(i+1) + startX;
				let gateHeight = eleHeight / 2;

				// Draw gate 2
				drawHelix(gate2x, y+eleHeight, gateHeight, eleWidth, helixCol, helixBgCol, bottomLayer, "Gate2", includeText);


				// Curved loop
				xMid = x;
				yLoop = y+eleHeight+gateHeight;
				endPoint = [xMid + CATALYTIC_DOMAIN_XPAD+eleWidth, yLoop];
				control1 = [xMid-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX, yLoop+CATALYTIC_LOOP_HEIGHT];
				control2 = [endPoint[0]-CATALYTIC_DOMAIN_CUBIC_RIGHT_DX, yLoop+CATALYTIC_LOOP_HEIGHT];
				d = "M " + xMid + " " + yLoop  + " C " + control1[0] + " " + control1[1] + ", " + control2[0] + " " + control2[1] + ", " + endPoint[0] + " " + endPoint[1];
				drawSVGobj(group, "path", {d: d, style: "stroke-width:" + CATALYTIC_DOMAIN_LOOP_WIDTH + "px; stroke:" + "black" + "; fill:transparent; stroke-linecap:round"} );
		

				// Straight loop 2
				drawSVGobj(group, "line", {x1: x, x2: x, y1: yLoop, y2: yLoop-gateHeight, style: "stroke-width:" + CATALYTIC_DOMAIN_LOOP_WIDTH + "px; stroke:" + "black" + "; fill:transparent; stroke-linecap:round"} );
			



			}



			else{
				drawSVGobj(group, "path", {d: d, style: "stroke-width:" + CATALYTIC_DOMAIN_LOOP_WIDTH + "px; stroke:" + pathCol + "; fill:transparent; stroke-linecap:round"} );
			
			}

			if (includeText || eleName == "N" || eleName == "C") {
				drawSVGobj(group, "text", {x: xlab, y: ylab, style: "font-size:" + CATALYTIC_DOMAIN_FONT_SIZE + "px; text-anchor:middle; dominant-baseline:central; "}, eleName);
			}

			INSERTION_MODULE_COL = "purple";
			INSERTION_MODULE_RADIUS = 10;

			// Insertion module
			if (eleName == "L6" && L6insert){

				let xCircle = CATALYTIC_DOMAIN_XPAD + (CATALYTIC_DOMAIN_XPAD+eleWidth)*(i+0.5) + startX;
				drawSVGobj(group, "circle", {cx: xCircle, cy: yLoop+CATALYTIC_LOOP_HEIGHT*0.8, r: INSERTION_MODULE_RADIUS, style: "stroke-width:1px; stroke:black; fill:" + INSERTION_MODULE_COL + ";"} );
				drawSVGobj(group, "text", {x: xCircle, y: yLoop+CATALYTIC_LOOP_HEIGHT*0.8, style: "font-size:" + CATALYTIC_DOMAIN_FONT_SIZE + "px; fill:white; text-anchor:middle; dominant-baseline:central; "}, features.insertName);
			

			}


			if ((isProtozyme || isUrzyme) && i == iStop){
				break;
			}
		
			
		}
	

		let group;




		// Strand
		if (i > 2 && i < 9){

			x = x - CATALYTIC_DOMAIN_ARROW_BG_WIDTH/2;
			let yStrand = y;
			
			// The final short strand
			if (i == 5){
				eleHeight = eleHeight/2;
				yStrand = CATALYTIC_DOMAIN_YPAD*2 + eleHeight + startYEff;
			}


			// Strand nr
			let nr = i-2;
			if (i == 6) nr = 5;
			if (i == 7) nr = 4;
			if (i == 8) nr = 3;
			let eleName = "S" + nr;

			let thisCol = strandCol;

	     // Special case: SH1 
      if (i == 5){
      	thisCol = motifCol;
      	eleName = "";
      }

		  
      group = $(drawSVGobj(bottomLayer, "g", {element: eleName,  style:"cursor:pointer"} ));


      let strandObj = drawStrand(x, yStrand, eleHeight, eleWidth, odd, thisCol, strandBgCol, motifCol, group, eleName, includeText)

			xMin = Math.min(xMin, strandObj.x1);
			xMax = Math.max(xMax, strandObj.x2);
		
		}

		
		
		
		// Helix
		if (i > 0 && i < 10 && (i <= 2 || i == 5 || i == 9)){
			
				let helixY = y;
				let eleHeightHelix = eleHeight;
				let thisCol = helixCol;
				let bgCol = helixBgCol;

				
				let nr = i;
				if (i == 5) nr = 4;
				if (i == 9) nr = 3;
				let eleName = "H" + nr;

				// Special case: SH1
				if (i == 5){
					eleName = "SH1";
					thisCol = motifCol;
					//bgCol = motifCol;
					group = group;


					// Motif 3 label
					if (includeText) drawSVGobj(group, "text", {x: x-eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/3 - CATALYTIC_DOMAIN_MOTIF_FONT_SIZE, y: helixY+eleHeightHelix, style: "font-size:" + CATALYTIC_DOMAIN_MOTIF_FONT_SIZE + "px; text-anchor:middle; dominant-baseline:central; font-weight:bold; fill:" + motifColBase + "; "}, "M3");
		


				}else{

					let eleStart = json == null ? -1 : json["median_" + eleName + ".start"];
					let eleStop = json == null ? -1 : json["median_" + eleName + ".end"];
					if (eleStart == null) eleStart = -1;
					if (eleStop == null) eleStop = -1;
					

					group = $(drawSVGobj(bottomLayer, "g", {element: eleName, start: eleStart, end: eleStop, style:"cursor:pointer"} ));
					


				}
				
				


				let helixObj = drawHelix(x, helixY, eleHeightHelix, eleWidth, thisCol, bgCol, group, eleName, includeText);

				xMin = Math.min(xMin, helixObj.x1);
				xMax = Math.max(xMax, helixObj.x2);


			
		}
		
		
		oddLoop = !oddLoop;
		odd = !odd;
		

    }



    // Rectangle around
   //drawSVGobj(bottomLayer, "rect", {x: xMin - CATALYTIC_DOMAIN_XPAD, y: startY-CATALYTIC_DOMAIN_YPAD, width: xMax - xMin + 2*CATALYTIC_DOMAIN_XPAD, height: CATALYTIC_DOMAIN_HEIGHT + 2*CATALYTIC_DOMAIN_YPAD, style: "fill:transparent; stroke:black; stroke-width: 1px"});
	

		// Title
		if (title != null && title != ""){
			let tx = startX + CATALYTIC_DOMAIN_FONT_SIZE/2;
			let ty = startY + CATALYTIC_DOMAIN_HEIGHT/2;


			// Box
			let titleFontSize = CATALYTIC_DOMAIN_FONT_SIZE*0.8;
			if (features.box != null && features.box == true){
				titleFontSize = CATALYTIC_DOMAIN_FONT_SIZE;
				drawSVGobj(bottomLayer, "rect", {x: tx - CATALYTIC_DOMAIN_FONT_SIZE, width: CATALYTIC_DOMAIN_FONT_SIZE*2, y: startY, height: CATALYTIC_DOMAIN_HEIGHT, style: "fill:white; stroke:black; stroke-width:" +  MAIN_ARROW_LWD + "px"});
				drawSVGobj(bottomLayer, "text", {transform:"translate(" + tx + ", " + ty + ") rotate(-90)", style: "font-size:" + titleFontSize + "px; text-anchor:middle; dominant-baseline:central;"}, title);
			}else{
				drawSVGobj(bottomLayer, "text", {transform:"translate(" + tx + ", " + (startY + 2*CATALYTIC_DOMAIN_YPAD) + ") rotate(-90)", style: "font-size:" + titleFontSize + "px; text-anchor:end; dominant-baseline:central;"}, title);
			}

		
		}


		
		let svgCoords = {x: xMin - CATALYTIC_DOMAIN_XPAD, y: startY-CATALYTIC_DOMAIN_YPAD, width: xMax - xMin + 2*CATALYTIC_DOMAIN_XPAD, height: CATALYTIC_DOMAIN_HEIGHT + 2*CATALYTIC_DOMAIN_YPAD};
    //$(groupFig).css("transform", "translate(" + (svgCoords.x - startX) + ", " + 0 + ")");
    return svgCoords;

}







  function drawSVGobj(svg, type, attr, val = null){

    //console.log("attr", attr);
    var newObj = document.createElementNS('http://www.w3.org/2000/svg', type);


    for (var a in attr){
      if (a == "text_anchor") newObj.setAttribute("text-anchor", attr[a]);
      else if (a == "stop_color") newObj.setAttribute("stop-color", attr[a]);
      else if (a == "marker_end") newObj.setAttribute("marker-end", attr[a]);
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
    $(newObj).hide().fadeIn(0); 
    
    
    
    
    return newObj;

  } 




		function drawHelix(x, helixY, eleHeightHelix, eleWidth, thisCol, bgCol, group, eleName, includeText = false){



				// Cylinder

				// Bottom circle
				drawSVGobj(group, "ellipse", {cx: x, cy: helixY+eleHeightHelix, rx: eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2, ry: CATALYTIC_DOMAIN_HELIX_CORNER_RADIUS, style: "stroke-width:0px; fill:white"} );
				drawSVGobj(group, "ellipse", {cx: x, cy: helixY+eleHeightHelix, rx: eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2, ry: CATALYTIC_DOMAIN_HELIX_CORNER_RADIUS, style: "stroke-width:1px; stroke:black; fill:" + thisCol} );
			

				// Rectangle
				drawSVGobj(group, "rect", {x: x-eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2, y: helixY, width: eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP, height: eleHeightHelix, style: "stroke-width:0px; fill:white"} );
				drawSVGobj(group, "rect", {x: x-eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2, y: helixY, width: eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP, height: eleHeightHelix, style: "stroke-width:0px; fill:" + thisCol} );
				

				// Rect border lines
				drawSVGobj(group, "line", {x1: x-eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2, x2: x-eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2, y1: helixY, y2: helixY+eleHeightHelix, style: "stroke-width:1px; stroke: black;"} );
				drawSVGobj(group, "line", {x1: x+eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2, x2: x+eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2, y1: helixY, y2: helixY+eleHeightHelix, style: "stroke-width:1px; stroke: black;"} );
				


				// Top circle
				drawSVGobj(group, "ellipse", {cx: x, cy: helixY, rx: eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2, ry: CATALYTIC_DOMAIN_HELIX_CORNER_RADIUS, style: "stroke-width:0px; fill:white"} );
				drawSVGobj(group, "ellipse", {cx: x, cy: helixY, rx: eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2, ry: CATALYTIC_DOMAIN_HELIX_CORNER_RADIUS, style: "stroke-width:1px; stroke:black; fill:" + bgCol } );
			
				// Text label
				if (includeText) drawSVGobj(group, "text", {x: x, y: helixY+eleHeightHelix/2, style: "font-size:" + CATALYTIC_DOMAIN_FONT_SIZE + "px; text-anchor:middle; dominant-baseline:central; "}, eleName);
	

				let helixObj = {x1: x-eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2, x2: x+eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/2};
				return helixObj;

		}




		function drawStrand(x, yStrand, eleHeight, eleWidth, odd, thisCol, strandBgCol, motifCol, group, eleName, includeText = false){

				let y1, y2, y3, ybg1, ybg2, ybg3;
				if (odd){

				  // Up arrow
				  y1 = yStrand+eleHeight;
				  ybg1 = y1 - CATALYTIC_DOMAIN_ARROW_BG_WIDTH;
				  y2 = yStrand+CATALYTIC_DOMAIN_STRAND_ARROW_HEAD_LEN_1;
				  y3 = yStrand+CATALYTIC_DOMAIN_STRAND_ARROW_HEAD_LEN_2;
				  y4 = yStrand;
				  ybg2 = y4 - CATALYTIC_DOMAIN_ARROW_BG_WIDTH;
				  ybg3 = y3 - CATALYTIC_DOMAIN_ARROW_BG_WIDTH;


				}else{

				  // Down arrow
				  y1 = yStrand+CATALYTIC_DOMAIN_ARROW_BG_WIDTH;
				  ybg1 = yStrand - CATALYTIC_DOMAIN_ARROW_BG_WIDTH;
				  y2 = yStrand+eleHeight-CATALYTIC_DOMAIN_STRAND_ARROW_HEAD_LEN_1;
				  y3 = yStrand+eleHeight-CATALYTIC_DOMAIN_STRAND_ARROW_HEAD_LEN_2;
				  y4 = yStrand+eleHeight;
				  ybg2 = y4 - CATALYTIC_DOMAIN_ARROW_BG_WIDTH;
				  ybg3 = y3 - CATALYTIC_DOMAIN_ARROW_BG_WIDTH;

				}

				let points =    (x-eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (y1);
				points += " " + (x-eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (y2);
				points += " " + (x-eleWidth/2) + "," + (y3);
				points += " " + x + "," + y4;
				points += " " + (x+eleWidth/2) + "," + (y3);
				points += " " + (x+eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (y2);
				points += " " + (x+eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (y1);



				// Background of arrow side
				let pointsBG =    (x+eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (y1);
				pointsBG += " " + (x+eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2 + CATALYTIC_DOMAIN_ARROW_BG_WIDTH) + "," + (ybg1);
				pointsBG += " " + (x+eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2 + CATALYTIC_DOMAIN_ARROW_BG_WIDTH) + "," + (y2);
				pointsBG += " " + (x+eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (y2);
				drawSVGobj(group, "polygon", {points: pointsBG, style: "stroke-width:1px; stroke:black; fill:" + strandBgCol} )


				// Background of arrow head
				pointsBG =    (x) + "," + (y4);
				pointsBG += " " + (x + CATALYTIC_DOMAIN_ARROW_BG_WIDTH) + "," + (ybg2);
				pointsBG += " " + (x+eleWidth/2 + CATALYTIC_DOMAIN_ARROW_BG_WIDTH) + "," + (ybg3);
				pointsBG += " " + (x+eleWidth/2+(odd ? 1 : 0)) + "," + (y3+(odd ? 1 : 0) );
				drawSVGobj(group, "polygon", {points: pointsBG, style: "stroke-width:1px; stroke:black; fill:" + strandBgCol} )
				

				if (!odd){

					// Top of arrow (the rectangular base)
					pointsBG =    (x+eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (y1);
					pointsBG += " " + (x+eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2 + CATALYTIC_DOMAIN_ARROW_BG_WIDTH) + "," + (ybg1);
					pointsBG += " " + (x-eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2 + CATALYTIC_DOMAIN_ARROW_BG_WIDTH) + "," + (ybg1);
					pointsBG += " " + (x-eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (y1);
					drawSVGobj(group, "polygon", {points: pointsBG, style: "stroke-width:1px; stroke:black; fill:" + strandBgCol} )

				}

				// Arrow
				drawSVGobj(group, "polygon", {points: points, style: "stroke-width:1px; stroke:black; fill:white"} )
				drawSVGobj(group, "polygon", {points: points, style: "stroke-width:1px; stroke:black; fill:" + thisCol} )



				// S1 is motif 2
				if (eleName == "S1"){


					let S2_y1 = yStrand+3*eleHeight/4;

					let pointsS2 =    (x-eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (S2_y1);
					pointsS2 += " " + (x-eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (y2);
					pointsS2 += " " + (x-eleWidth/2) + "," + (y3);
					pointsS2 += " " + x + "," + y4;
					pointsS2 += " " + (x+eleWidth/2) + "," + (y3);
					pointsS2 += " " + (x+eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (y2);
					pointsS2 += " " + (x+eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2) + "," + (S2_y1);


					drawSVGobj(group, "polygon", {points: pointsS2, style: "stroke-width:0px; fill:white"} )
					drawSVGobj(group, "polygon", {points: pointsS2, style: "stroke-width:0px; fill:" + motifCol} )
					drawSVGobj(group, "polygon", {points: points, style: "stroke-width:1px; stroke:black; fill:transparent"} )
					if (includeText) drawSVGobj(group, "text", {x: x-eleWidth*CATALYTIC_DOMAIN_HELIX_WIDTH_PROP/3 - CATALYTIC_DOMAIN_MOTIF_FONT_SIZE, y: yStrand+eleHeight/2, style: "font-size:" + CATALYTIC_DOMAIN_MOTIF_FONT_SIZE + "px; text-anchor:middle; dominant-baseline:central; font-weight:bold; fill:" + motifColBase + "; "}, "M2");
		

				}


				if (includeText) drawSVGobj(group, "text", {x: x, y: yStrand+eleHeight/2, style: "font-size:" + CATALYTIC_DOMAIN_FONT_SIZE + "px; text-anchor:middle; dominant-baseline:central; "}, eleName);

				let strandObj = {x1: x-eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2, x2: x+eleWidth*CATALYTIC_DOMAIN_STRAND_ARROW_BASE_WIDTH_PROP/2};
				return strandObj;
					
		}
