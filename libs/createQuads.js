// use this function to create the lines that will be rendered
function createQuads(frame) {
    
    for(let j = -10; j < 10; j++) 
    for(let i = -10; i < 10; i++) {

        let yo = Math.sin(i * 0.1 * 5) * 2;
        // yo     += Math.cos(j * 0.1 * 5) * 2;

        let c1 = Math.random();

        // if(Math.random() > 0.3) continue;


        let t = indexToUvs(Math.floor(Math.random() * 100));

        quads.push(
            new Quad(0,0,0, t.us, t.vs, t.ue, t.ve)
            // .rotate(0,0,1, i*0.12 + j * 0.3)
            // .rotate(1,0,0, i*0.25)
            // .rotate(0,1,0, j*0.2)
            .color(2500, 2500, 2500)
            .scale(2)
            // .rotate(0,0,1, Math.random() * 1.28)
            // .rotate(1,0,0, Math.random() * 1.28)
            // .rotate(0,1,0, Math.random() * 1.28)
            .translate(i * 3, 0, j * 3)
            .translate(0, Math.cos(i * 0.3) + Math.sin(j * 0.25), 0)
            // .translate(0, Math.cos(i * 0.5) * 0.2  + Math.sin(j * 1) * 0.2 )
        );
    }
}


function indexToUvs(index) {
    let x = index % 10;
    let y = Math.floor(index / 10);

    let us = x / 10;
    let vs = y / 10;

    let ue = us + 0.1;
    let ve = vs + 0.1;

    return {
        us: us,
        vs: vs,

        ue: ue,
        ve: ve,
    }
}