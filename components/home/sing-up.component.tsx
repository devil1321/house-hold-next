import React from 'react'
import styled from 'styled-components';
import { styles } from '@/styles/styles';

interface SignUpProps{
  heading:string;
  subHeading:string;
  placeholder:string;
}

const SignUp:React.FC<SignUpProps> = ({heading,subHeading,placeholder}) => {
  return (
    <SignUpStyle>
      <div className='home__sign-up'>
        <div className="home__sign-up-intro">
          <h3>{heading}</h3>
          <p>{subHeading}</p>
        </div>
        <div className="home__sign-up-form">
          <form action="">
            <div className="home__sign-up-field">
              <input type="text" placeholder={placeholder} />
              <button type='submit'>
                <img src="/assets/icons/message.png" alt="message" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </SignUpStyle>
  )
}

const SignUpStyle = styled.div`
  .home__sign-up{
    margin:50px 0px;
    padding:0px 50px;
    ${styles.mixins.flex('row','space-between','center',null)}
  }
  .home__sign-up-form{
    width:40%;
  }
  .home__sign-up-field{
    width:100%;
    ${styles.mixins.flex('row','center','center',null)}
    input{
      padding:0px 5px;
      width:80%;
      height:30px;
      border:1px solid black;
    }
    button{
      padding:0px 20px;
      height:32px;
      background-color:${styles.colors.smalt_blue};
      ${styles.mixins.flex('row','center','center',null)}
      border:0px;
      outline:none;
      &:active,&:focus{
        border:0px;
        outline:none;
      }
    }
  }
`

export default SignUp
