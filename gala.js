let table={};
table ={
  width: 1040,
  height:"540mm",
  howPlace(){if(this.height.includes("mm")){return+this.height.replace("mm","")*this.width}}
}
