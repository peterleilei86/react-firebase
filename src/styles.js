import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 700px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 1px solid rgba(0, 0, 0, 0.1);
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
`

export const Input = styled.input`
  padding: 5px;
  width: 350px;
  height: 35px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  :focus {
    border: ${({isValid}) => (isValid ? '1px solid #2748a0' : '1px solid #E5386D')};
    outline: none;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 362px;
  margin-top: 10px;
`

export const FormButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${({isLogin}) => (isLogin ? '#2748a0' : 'rgba(0,0,0,.1)')};
  color: ${({isLogin}) => (isLogin ? '#fff' : '#2748a0')};
  font-size: 18px;
  border-radius: 2px;
`

export const Error = styled.p`
  color: #e5386d;
  margin-top: 0;
  padding-top: 0;
`

export const Title = styled.h1`
  margin-bottom: 40px;
`
