import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 15px;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
`

const Button = styled.button`
  display: block;  
  width: 100%;
  font-size: 20px;
  border: none;
  color: #fff;
  padding: 15px;
  border-radius: 12px;
  cursor: pointer;
  &.plusBtn {
    background: #336EFD;
  }
  &.minusBtn {
    background: #f35c5c;
  }
`

function App() {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch({ type: "INCREMENT" })
  }
  const handleMinus = () => {
    dispatch({ type: "MINUS" })
  }

  return (
    <Wrapper>
      <Inner>
        <h2>카운트 : {count}</h2>
        <Button className="plusBtn" onClick={handlePlus}>증가</Button>
        <Button className="minusBtn" onClick={handleMinus}>감소</Button>
      </Inner>
    </Wrapper>
  );
}

export default App;
