import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react';
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
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    setSubmitting(true);
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label className='form-label'>City:</label>
        <input className='form-input' type='text' id='city' {...register('city', {required: true})} />
        <input className='form-submit' type='submit' value='senden' />

        {errors.city && <p className='form-error'>Eingabe erforderlich</p>}
        {submitting &&
          <div className='form-result'>
            <ul>
              <li>[Result]</li>
              <li>[Result2]</li>
              <li>[Result3]</li>
              <li>[Result4]</li>
              <li>[Result5]</li>
            </ul>
          </div>
        }
      </form>
    </>
  )
}

export default App;