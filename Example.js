import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button } from 'react';
  

export default class Example extends Component {
    render() {
        return (
            <div class="col-md-4">
            <div class="card">
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="submit" class="btn btn-dark">More Details</button>
  </div>
</div>
            </div>
        );
    }
}
// export default class Example extends Component{
//     render(){
//     return (
//       <div>
//         <Card>
//           <CardImg/>
//           <CardBody>
//             <CardTitle>Card title</CardTitle>
//             <CardSubtitle>Card subtitle</CardSubtitle>
//             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//             <Button>Button</Button>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
  

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
