
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
    mixins:{
      flex:function(direction:string,jc:string,ai:string,wrap:string | null = null){
        return `
          display:flex;
          flex-direction:${direction};
          justify-content:${jc};
          align-items:${ai};
          flex-wrap:${wrap};
        `
      }
    },
    fn:{
      pxToRem:function(px:number){
        return (px / 16) + 'rem'
      }
    }
  }