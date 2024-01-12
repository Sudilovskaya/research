export const drawNetwork = (
  context,
  width,
  height,
  nodes,
  links
) => {
  context.clearRect(0, 0, width, height);

  // Draw the links first
  links.forEach((link) => {
    context.beginPath();
    context.moveTo(link.source.x, link.source.y);
    context.lineTo(link.target.x, link.target.y);
    context.stroke();
  });


  const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    // First, start by splitting all of our text into words, but splitting it into an array split by spaces
    let words = text.split(' ');
    let line = ''; // This will store the text of the current line
    let testLine = ''; // This will store the text when we add a word, to test if it's too long
    let lineArray = []; // This is an array of lines, which the function will return

    // Let's iterate over each word
    words.forEach((item, index) => {
      // Create a test line, and measure it..
      testLine += `${item} `
      let metrics = context.measureText(testLine);
      let testWidth = metrics.width
      // If the width of this test line is more than the max width
      if (testWidth > maxWidth && index > 0) {
        // Then the line is finished, push the current line into "lineArray"
        lineArray.push([line, x, y])
        // Increase the line height, so a new line is started
        y += lineHeight;
        // Update line and test line to use this word as the first word on the next line
        line = `${item} `
        testLine = `${item} `
      } else {
        // If the test line is still less than the max width, then add the word to the current line
        line += `${item} `
      }
      // If we never reach the full max width, then there is only one line.. so push it into the lineArray so we return something
      if (index === words.length - 1) {
        lineArray.push([line, x, y])
      }
    })
    // Return the line array
    return lineArray;
  }

  // Draw the nodes
  nodes.forEach((node) => {
    if (!node.x || !node.y) {
      return;
    }

    const letters = node.name.split('');
    const height = 30 > letters.length * 2 ? 30 : letters.length * 2.3

    context.textBaseline = "top"
    context.beginPath();
    context.moveTo(node.x, node.y);
    context.fillStyle = '#ffffff';
    context.fillRect(node.x - 65, node.y - 10, 130, height)

    context.strokeStyle = "#000000";
    context.strokeRect(node.x - 65, node.y - 10, 130, height)

    context.fillStyle = '#000000';
    context.font = "12px Montserrat";
    context.textAlign = 'center'

    const wrappedText = wrapText(context, node.name, node.x, node.y, 120, 15);

    wrappedText.forEach(item => {
      context.fillText(item[0], item[1], item[2]);
    })
  });
};