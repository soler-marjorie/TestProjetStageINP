// MyCirclePacking.tsx
import { useState } from 'react';
import { ResponsiveCirclePacking } from '@nivo/circle-packing';

type MyDatum = {
  
  name: React.ReactNode; // Utilisation de React.ReactNode pour le contenu MathML
  loc: number;
  children?: MyDatum[];
};

const mathData: MyDatum = {
  name: 
  <math>
  <mo>&#x2212;</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mi>c</mi>
  </math>,
  loc: 0,
  // children: [
  //   {
  //     name: 'a² + b²',
  //     loc: 0,
  //     children: [
  //       { name: 'a²', loc: 400 },
  //       { name: 'b²', loc: 300 },
  //     ],
  //   },
  //   {
  //     name: 'c²',
  //     loc: 700,
  //   },
  // ],
};

let profondeurNode = 0;

function MyCirclePacking() {
  const [zoomedId, setZoomedId] = useState<string | null>(null);

  function handleClick(node: any) {
    setZoomedId(zoomedId === node.id ? null : node.id);
    if(profondeurNode >= node.depth) {
      profondeurNode = 0; // Réinitialiser la profondeur si le même noeud est cliqué
    }else {
      profondeurNode = node.depth; // Récupérer la profondeur du noeud cliqué
    }
    console.log('Profondeur du noeud cliqué :', profondeurNode);
  }
  

  function filterLabels(label: { node: any }) {
    return label.node.depth < 2 + profondeurNode && label.node.depth >= profondeurNode; 
  }

  return (
    <div>
      <h2>Répartition hiérarchique</h2>
      <div>
        <input type="text" />
      </div>
      {/* ✅ MathML intégré ici */}
      <div style={{ marginBottom: '20px' }}>
        <p>Formule mathématique associée :</p>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mi>x</mi>
        <mo>=</mo>
        <mrow data-mjx-texclass="ORD">
          <mfrac>
            <mrow>
              <mo>&#x2212;</mo>
              <mi>b</mi>
              <mo>&#xB1;</mo>
              <msqrt>
                <msup>
                  <mi>b</mi>
                  <mn>2</mn>
                </msup>
                <mo>&#x2212;</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mi>c</mi>
              </msqrt>
            </mrow>
            <mrow>
              <mn>2</mn>
              <mi>a</mi>
            </mrow>
          </mfrac>
        </mrow>
      </math>
      </div>

      {/* Le graphique Nivo */}
      <div style={{ height: 600 }}>
        <ResponsiveCirclePacking<MyDatum>
          data={mathData}
          id="name"
          value="loc"
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          colors={{ scheme: 'nivo' }}
          colorBy="id"
          childColor={{
            from: 'color',
            modifiers: [['brighter', 0.4]],
          }}
          padding={4}
          enableLabels={true}
          labelsSkipRadius={16}
          labelsFilter={filterLabels}
          labelTextColor={{
            from: 'color',
            modifiers: [['darker', 2]],
          }}
          zoomedId={zoomedId}
          onClick={handleClick}
          motionConfig="slow"
          labelComponent= {<math>
            <mo>&#x2212;</mo>
                          <mn>4</mn>
                          <mi>a</mi>
                          <mi>c</mi>
            </math>}
        />
      </div>
    </div>
  );
}

export default MyCirclePacking;
