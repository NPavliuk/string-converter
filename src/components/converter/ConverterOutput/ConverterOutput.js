import { TextInput } from '@components/forms'
import { useDispatch, useSelector } from 'react-redux'
import { changeOutputValue } from '@store/reducers/converterReducer/converterReducerActions'

export const ConverterOutput = () => {
  const dispatch = useDispatch()
  const outputValue = useSelector(state => state.converter.outputValue)

  const inputHandle = (e) => {
    const currentOutputValue = e.target.value
    dispatch(changeOutputValue(currentOutputValue))
  }

  return (
    <TextInput value={outputValue} handler={inputHandle} placeholder={'Your result'}/>
  )
}
