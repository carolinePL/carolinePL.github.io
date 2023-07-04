

TREE_SVG_WIDTH = 1000;
TREE_SVG_X_PADDING = 200;
TREE_SVG_LINE_HEIGHT = 5;
TREE_SVG_FONT_SIZE = 8;
TREE_TITLE_FONT_SIZE = 20;
BRANCH_WIDTH = 0.7;


// Adds a header to the top of the page and a footer to the bottom
function drawTree(treeDiv, treeFile1, treeName1, treeFile2, treeName2, metadata){


		
	console.log("loading from " + treeFile1);
		
	// Read in tree file as string
	fetch(treeFile1)
	  .then((res) => res.text())
	  .then((text1) => {
		
			let trees1 = getTreesFromString(text1);
			let tree1 = trees1[0];
			console.log(tree1);
			
			
			fetch(treeFile2)
			  .then((res) => res.text())
			  .then((text2) => {
				  
				  
				  
					let trees2 = getTreesFromString(text2);
					let tree2 = trees2[0];
					console.log(tree2);
			
			
					// Make SVG
					let svg = $(`<svg id="treeSVG" height=0 width=0 overflow="auto"></svg>`);
					treeDiv.append(svg);

					let success = plotTree(tree1, treeName1, tree2, treeName2, svg, metadata);
			
			})
			.catch((e) => console.error(e));
		
	   })
	  .catch((e) => console.error(e));
				
		

}



// Draw a tree
function plotTree(tree1, treeName1, tree2, treeName2, svg, metadata){



	tree1.root.internalLabel = treeName1;
	tree2.root.internalLabel = treeName2;

	
	// Rename the leaves in tree 1
	for (let i = 0; i < tree1.getLeafList().length; i++){
		let leaf = tree1.getLeafList()[i];
		let label = leaf.label;
		let label_acc = label.split("_")[0];
		
		// Substring/match
		let match = null;
		for (let acc in metadata){
			if (acc == label_acc){
				match = acc;
				break;
			}
		}
		
		if (match == null){
			console.log("Cannot find match in tree 1 for", label);
		}else{
			leaf.label = match;
			leaf.metadata = metadata[match];
		}
		
		
		
	}
	

	
	// Rename the leaves in tree 2
	for (let i = 0; i < tree2.getLeafList().length; i++){
		
		let leaf = tree2.getLeafList()[i];
		let label = leaf.label;
		let label_acc = label.split("_")[0];
		
		
		// Find parent mota gene
		let match = null;
		let matchType = null;
		let categories = ["accM3", "accM2", "accM1", "acc1", "acc2", "acc3", "acc0"];
		for (let acc in metadata){
			for (let j = 0; j < categories.length;  j++){
				
				
				if (metadata[acc][categories[j]] == label_acc){
					match = acc;
					matchType = categories[j]
					break;
				}
				
			}
			
		}
		
		if (match == null){
			console.log("Cannot find match in tree 2 for", label);
		}else{
			leaf.label = match;
			leaf.metadata = metadata[match];
			leaf.matchType = matchType;
			
		}

		
		
	}
	
	
	// Metadata for tree 2
	for (let i = 0; i < tree2.getLeafList().length; i++){
		let match = null;
		let leaf1 = null;
		for (let j = 0; j < tree1.getLeafList().length; j++){
			if (tree1.getLeafList()[j].label == tree2.getLeafList()[i].label){
				match = tree1.getLeafList()[j];
				leaf1 = tree1.getLeafList()[j];
				break;
			}
		}
		
		
		//tree2.getLeafList()[i].y = (i+1)*TREE_SVG_LINE_HEIGHT;
		if (match != null){
			//tree2.getLeafList()[i].y = match.y;
			tree2.getLeafList()[i].partner = leaf1;
			leaf1.partner = tree2.getLeafList()[i];
		}else{
			
			console.log("Warning: cannot find match for", tree2.getLeafList()[i].label);
		}
		
		
	}
	
	
	// Sort internal nodes
	sortTree(tree1.root);
	sortTree(tree2.root);

	numberLeaves(tree1.root, [10], false);
	numberLeaves(tree2.root, [10], false);
	

	// Tidy tree2 with respect to tree 1
	for (let i = 0; i < 10; i++){
		tidyLeafOrdering(tree2.root);
		numberLeaves(tree2.root, [10], false);
		
		tidyLeafOrdering(tree1.root);
		numberLeaves(tree1.root, [10], false);
		
	}
	
	

	

	// Prepare svg size
	let ntaxa = tree1.getLeafList().length;
	let svgHeight = (ntaxa+2)*TREE_SVG_LINE_HEIGHT;
	console.log("ntaxa=", ntaxa);
	svg.hide();
    svg.html("");
    svg.height(svgHeight);
    svg.width(TREE_SVG_WIDTH);
	
	
	let branchG = drawSVGobj(svg, "g");
	let nodeG = drawSVGobj(svg, "g");
	let textG = drawSVGobj(svg, "g");
	
	// Left tree
	let lengthScale = 0.5* (TREE_SVG_WIDTH - TREE_SVG_X_PADDING - TREE_SVG_LINE_HEIGHT) /  tree1.root.height;
	drawBranch(nodeG, branchG, tree1.root, TREE_SVG_LINE_HEIGHT, lengthScale, true);
	
	
	// Right tree
	let lengthScale2 = 0.5* (TREE_SVG_WIDTH - TREE_SVG_X_PADDING - TREE_SVG_LINE_HEIGHT) /  tree2.root.height;
	drawBranch(nodeG, branchG, tree2.root, TREE_SVG_WIDTH-TREE_SVG_LINE_HEIGHT, -lengthScale2, false);
	
	
	// Dashed lines across leaf pairs
	for (let i = 0; i < tree1.getLeafList().length; i++){
		let leaf1 = tree1.getLeafList()[i];
		let leaf2 = leaf1.partner;
		if (leaf2 != null){
			let y1 = leaf1.y;
			let y2 = leaf2.y;
			let x1 = TREE_SVG_LINE_HEIGHT + tree1.root.height*lengthScale + 30;
			let x2 = TREE_SVG_WIDTH-TREE_SVG_LINE_HEIGHT - tree2.root.height*lengthScale2 - 30;
			drawSVGobj(branchG, "line", {x1: x1, y1: y1, x2: x2, y2: y2, style: "stroke-linecap:round; stroke-width:" + BRANCH_WIDTH + "px; stroke: #69696955"});
		}
	}
	
	
	
	// Legend
	let legendY = svgHeight - TREE_SVG_FONT_SIZE*5;
	let nodeCol = "#f03b20";
	drawSVGobj(nodeG, "circle", {cx: TREE_SVG_FONT_SIZE*2, cy: legendY, r: TREE_SVG_FONT_SIZE/3, style: "fill:" + nodeCol + ";stroke:black" + ";stroke-width:1px"});
	drawSVGobj(nodeG, "text", {x: TREE_SVG_FONT_SIZE*3, y:legendY , style: "text-anchor:start; dominant-baseline:middle; font-size:" + TREE_SVG_FONT_SIZE + "px; fill:black"}, value="p > 0.9")
	
	legendY -= TREE_SVG_FONT_SIZE*2;
	nodeCol = "#feb24c";
	drawSVGobj(nodeG, "circle", {cx: TREE_SVG_FONT_SIZE*2, cy: legendY, r: TREE_SVG_FONT_SIZE/3, style: "fill:" + nodeCol + ";stroke:black" + ";stroke-width:1px"});
	drawSVGobj(nodeG, "text", {x: TREE_SVG_FONT_SIZE*3, y:legendY , style: "text-anchor:start; dominant-baseline:middle; font-size:" + TREE_SVG_FONT_SIZE + "px; fill:black"}, value="0.7 < p < 0.9")
	
	
	legendY -= TREE_SVG_FONT_SIZE*2;
	nodeCol = "#ffeda0";
	drawSVGobj(nodeG, "circle", {cx: TREE_SVG_FONT_SIZE*2, cy: legendY, r: TREE_SVG_FONT_SIZE/3, style: "fill:" + nodeCol + ";stroke:black" + ";stroke-width:1px"});
	drawSVGobj(nodeG, "text", {x: TREE_SVG_FONT_SIZE*3, y:legendY , style: "text-anchor:start; dominant-baseline:middle; font-size:" + TREE_SVG_FONT_SIZE + "px; fill:black"}, value="p < 0.7")
	

	svg.show();
	
	return true;
	
}


function sortTree(node){
	
	
	// Put smallest subtree on left child
	if (node.isLeaf()) {
		return;
	}
	
	
	let child1 = node.children[0];
	let child2 = node.children[1];
	let n1 = new Tree(child1).getLeafList().length;
	let n2 = new Tree(child2).getLeafList().length;
	if (n1 > n2){
		node.children[1] = child2;
		node.children[0] = child1;
	}else{
		node.children[0] = child2;
		node.children[1] = child1;
	}
	
	
	sortTree(child1);
	sortTree(child2);
	
}


function numberLeaves(node, arr, topIsLeft){
	if (node.isLeaf()) {
		node.y = arr[0];
		arr[0] += TREE_SVG_LINE_HEIGHT;
		return;
	}
	
	
	// First child goes on top
	if (topIsLeft){
		numberLeaves(node.children[0], arr, topIsLeft);
		numberLeaves(node.children[1], arr, topIsLeft);
	}
	
	// Second child goes on top
	else{
		numberLeaves(node.children[1], arr, topIsLeft);
		numberLeaves(node.children[0], arr, topIsLeft);
	}
	
	
}


function tidyLeafOrdering(node){
	
	
	if (node.isLeaf()) {
		if (node.partner == null) return node.y;
		return node.partner.y;
		
		
		//if (node.partner == null) return 0;
		//return node.partner.y - node.y;
	}
	

	
	// Get sum of Y in leaves
	let child1 = node.children[0];
	let child2 = node.children[1];
	let n1 = new Tree(child1).getLeafList().length;
	let n2 = new Tree(child2).getLeafList().length;
	let s1 = tidyLeafOrdering(child1);
	let s2 = tidyLeafOrdering(child2);
	
	
	if (s1/n1 > s2/n1){
		node.children[0] = child1;
		node.children[1] = child2;
	}else{
		node.children[0] = child2;
		node.children[1] = child1;
	}
	
	return s1+s2;
	
	
}





// Recursively draw a tree
function drawBranch(nodeG, branchG, node, x, lengthScale, isLeft){
	
	
	
	
	
	if (node.isLeaf()){
		
		
		let label = node.label;// getNameOfAccession(node.label);
		
		
		let y = node.y;
		
		// Domain figure
		let domainOfLife = "Bacteria";// getLifeDomainOfAccession(node.label);
		if (domainOfLife != null){
			//drawSVGobj(nodeG, "image", {id: label, href:"/fig/" + domainOfLife + ".png", x: x, y: y-TREE_SVG_FONT_SIZE/2, height:TREE_SVG_FONT_SIZE});
		}
		
		// Text
		if (isLeft) {
			drawSVGobj(nodeG, "text", {x: x+0.05*TREE_SVG_FONT_SIZE, y: y, style: "text-anchor:start; dominant-baseline:middle; font-size:" + TREE_SVG_FONT_SIZE*0.8 + "px; fill:black"}, value=label)
		}else{
			drawSVGobj(nodeG, "text", {x: x-0.05*TREE_SVG_FONT_SIZE, y: y, style: "text-anchor:end; dominant-baseline:middle; font-size:" + TREE_SVG_FONT_SIZE*0.8 + "px; fill:black"}, value=label)
		}
		
		


		return y;
	}
	
	
	// Children
	let child1X = x + lengthScale*(node.children[0].branchLength);
	let child2X = x + lengthScale*(node.children[1].branchLength);
	let child1Y = drawBranch(nodeG, branchG, node.children[0], child1X, lengthScale, isLeft);
	let child2Y = drawBranch(nodeG, branchG, node.children[1], child2X, lengthScale, isLeft);


	//if (child1Y >= 0 && child2Y >= 0){

		// Branch to children
		drawSVGobj(branchG, "line", {x1: x, y1: child1Y, x2: child1X, y2: child1Y, style: "stroke-linecap:round; stroke-width:" + BRANCH_WIDTH + "px; stroke: black"});
		drawSVGobj(branchG, "line", {x1: x, y1: child2Y, x2: child2X, y2: child2Y, style: "stroke-linecap:round; stroke-width:" + BRANCH_WIDTH + "px; stroke: black"});
		
		
		// Shoulder
		drawSVGobj(branchG, "line", {x1: x, y1: child1Y, x2: x, y2: child2Y, style: "stroke-linecap:round; stroke-width:" + BRANCH_WIDTH + "px; stroke: black"});
		
	
	
	
		let y = (child1Y + child2Y) / 2;
		
		// Posterior support
		let p = node.annotation.posterior;
		if (p != null){
			p = parseFloat(p);
			p = roundToSF(p, 1);

			
			let nodeCol = 	p > 0.9 ? "#f03b20" : p > 0.7 ? "#feb24c" : "#ffeda0";
			drawSVGobj(nodeG, "circle", {cx: x, cy: y, r: TREE_SVG_FONT_SIZE/4, style: "fill:" + nodeCol + ";stroke:black" + ";stroke-width:1px"});
			//drawSVGobj(svg, "text", {x: x + (isLeft ? 1 : -1) * TREE_SVG_FONT_SIZE/4, y: y, style: "text-anchor:" + (isLeft ? "start" : "end") + "; dominant-baseline:middle; font-size:" + (TREE_SVG_FONT_SIZE) + "px; fill:black"}, p);
		}
		
		
		
			
		// Node name
		if (node.internalLabel != null){
			drawSVGobj(nodeG, "text", {x: x + (isLeft ? 1 : -1) * TREE_TITLE_FONT_SIZE/4, y: y, style: "text-anchor:" + (isLeft ? "start" : "end") + "; dominant-baseline:middle; font-size:" + TREE_TITLE_FONT_SIZE + "px; fill:black"}, value=node.internalLabel)
		}
		
		return y;
		
	//}
	
	//return -1;
	
}



function getMRCA(tree, leaves){
	
	let candidateMRCA = leaves[0].getAncestors();
	for (let i = 1; i < leaves.length; i++){
		let leaf = leaves[i];
		let ancestors = leaf.getAncestors();
		
		// Remove any candidates that are not an ancestor of this node
		let newCandidates = [];
		for (let j = 0; j < candidateMRCA.length; j++){
			
			if (ancestors.includes(candidateMRCA[j])){
				newCandidates.push(candidateMRCA[j]);
			}
		}
		candidateMRCA = newCandidates;
		
	}
	
	
	// MRCA is the youngest of the candidates
	let mrca = candidateMRCA[0];
	return mrca;
	

	
}

