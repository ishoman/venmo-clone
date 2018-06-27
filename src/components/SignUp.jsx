import React from 'react';

function SignUp(){
  return (
    <div>
      <style jsx>{`
          .sign-up {
            position: relative;
            top: 150px;
            right: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 50px;
            font-weight: 300;
            line-height: 0px;
            padding: 0;
            margin: 0;
          }
          button{
            background-color: #4296CC;
            font-size: 16px;
            border-radius: 10px;
            color: white;
            padding: 20px;
            width: 400px;
          }
          .permission{
            color: grey;
            font-size: 14px;
          }
          .email{
            color: grey;
            font-size: 18px;
          }
        `}

      </style>
      <div className='sign-up'>
        <p>Send money and</p> <p>make purchases at</p> <p>approved merchants</p>
        <button>Sign up with Facebook</button>
        <p className='permission'>We'll never post without your permission.</p>
        <p className='email'>or with your email address</p>
      </div>
    </div>
  );
}

export default SignUp;
