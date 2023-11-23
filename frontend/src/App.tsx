import { useForm, SubmitHandler } from 'react-hook-form'
import './App.css'

type FieldValues = {
  city: string
};

function App() {
  const {
    register, 
    handleSubmit, 
    formState: {errors},
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)
  // const onSubmit = (data: FieldValues) => {console.log('gesendet', data)}

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>City:</label>
        <input type='text' id='city' {...register('city', {required: true})} />
        <input type='submit' value='senden' />

        {errors.city && <p className='form-error'>Eingabe erforderlich</p>}
      </form>
    </>
  )
}

export default App;
