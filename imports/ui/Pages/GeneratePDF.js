import React, { Component } from 'react';
import PDF from 'jspdf';
import html2canvas from 'html2canvas';

import ChartIndex from '../Charts/ChartIndex';
import Header from '../Components/Header';

export default class GeneratePDF extends Component {
  printDocument() {
    const input = this.pdf;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new PDF();
        pdf.addImage(imgData, 'JPEG', 10, 10, 180, 150);         // pdf.output('dataurlnewwindow');
        pdf.save('download.pdf');
      })
    ;
  }

  render() {
    return (
      <div>
        <Header title={'Export PDF'} />
        <div className="wrapper">
          <ChartIndex ref={(el) => { this.pdf = el; }} id={this.props.match.params.id} />
          <button className="button button--anchor" onClick={this.printDocument}>Download</button>
        </div>
      </div>);
  }
}
