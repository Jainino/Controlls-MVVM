import { GlobalStyle } from "./styles/global"
import { InputButtonControl } from "./components/InputButtonControl"
import { Flex } from "./components/shared";
import { isNotEmpty } from "./utils";
import { InputAutocompliteControl } from "./components/InputAutocompliteControl";

function App() {

  return (
    <Flex $direction="column" $gap={10} $padding="20px 15px">
      <GlobalStyle/>

      <Flex $direction="column" $padding="10px">
        <h2>1. Первый контрол кнопочек (лево)</h2>
        <InputButtonControl 
          buttons={
            [
              {text: 'alert', position:'left', callback: (value) => alert(value)},
              {text: 'check for number', position: 'left', callback:(value) => {
                if (isNotEmpty(value) && Number.isFinite(Number(value))) {
                  alert(value);
                }
              }}
            ]
          }
        />
      </Flex>

      <Flex $direction="column" $padding="10px">
        <h2>2. Второй контрол кнопочек (право)</h2>
        <InputButtonControl 
          buttons={
            [
              {text: 'clear', position:'right', callback: (_, setValue)=>setValue('')},
              {text: 'Hello World!', position: 'right', callback:(_, setValue)=>setValue('Hello Wooorld!')}
            ]
          }
        />
      </Flex>

      <Flex $direction="column" $padding="10px" style={{width: '50%'}}>
        <h2>3. Первый контрол автокомплит (max 3 suggestions)</h2>
        <InputAutocompliteControl 
          maxSuggestions={3}
        />
      </Flex>

      <Flex $direction="column" $padding="10px" style={{width: '50%'}}>
        <h2>4. Второй контрол автокомплит (max 10 suggestions)</h2>
        <InputAutocompliteControl 
          maxSuggestions={10}
        />
      </Flex>
    </Flex >
  )
}

export default App;
