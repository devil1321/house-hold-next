
export const styles = {
    sizes:{
      xs:5,
      sm_xs:10,
      xs_md:20,
      sm_md:30,
      md:40,
      lg:50,
      v_lg:100
    },
    fonts:{
      roboto:'Roboto',
    },
    colors:{
      zircon:"#F3F6FF",
      goldenrod:"#F9D370",
      smalt_blue:"#4C8787",
      black_rock:"#0A032A"
    },
    colors_array:['#FFFFFF','#323334','#C4C4C4','#F2C94C','#F2994A','#EB5757','#BB6BD9','#56CCF2','#6FCF97','#219653','#2F80ED','#DF1313','#770505','#0A5D8B','#AD5B12','#4F0E8B','#0A7090','#156008'],
    components:{
      button:`button{
        cursor:pointer;
        padding:10px 20px;
        height:40px;
        font-weight:bold;
        background-color:#4C8787;
        color:white;
        border:0px;
        &:hover{
          opacity:0.7;
        }
      }`,
      button_with_border:`button{
        cursor:pointer;
        padding:10px 20px;
        height:40px;
        font-weight:bold;
        background-color:#4C8787;
        border:2px solid white;
        color:white;
        box-shadow:0px 2px 2px grey;
        &:hover{
          opacity:0.7;
        }
      }`,
      button_transparent:`button{
        cursor:pointer;
        padding:10px 20px;
        height:40px;
        font-weight:bold;
        background:transparent;
        border:2px solid white;
        color:white;
        box-shadow:0px 2px 2px grey;
        &:hover{
          opacity:0.7;
        }
      }`
    },
    mixins:{
      flex:function(direction:string,jc:string,ai:string,wrap:string | null = null){
        return `
          display:flex;
          flex-direction:${direction};
          justify-content:${jc};
          align-items:${ai};
          flex-wrap:${wrap};
        `
      },
      breakpoint_down:function(breakpoint:string,styles:string){
        switch(breakpoint){
          case "small":
            return `@media(max-device-width: 39.0375em) {
              ${styles}
            }`
          case "sm-med":
            return `@media(max-device-width: 33.75em) {
              ${styles}
            }`
          case "medium-sm":
            return `@media(max-device-width: 63em) {
              ${styles}
            }`
          case "medium":
            return `@media(max-device-width: 64em) {
              ${styles}
            }`
          case "large":
            return `@media(max-device-width: 85.375em) {
              ${styles}
            }`
          default:
            return null
        }
      },
      breakpoint_up:function(breakpoint:string,styles:string){
        switch(breakpoint){
          case "small":
            return `@media(min-device-width: 39.0375em) {
              ${styles}
            }`
          case "sm-med":
            return `@media(min-device-width: 33.75em) {
              ${styles}
            }`
          case "medium-sm":
            return `@media(min-device-width: 63em) {
              ${styles}
            }`
          case "medium":
            return `@media(min-device-width: 64em) {
              ${styles}
            }`
          case "large":
            return `@media(min-device-width: 85.375em) {
              ${styles}
            }`
          default:
            return null
        }
      }
    },
    fn:{
      pxToRem:function(px:number){
        return (px / 16) + 'rem'
      }
    }
  }