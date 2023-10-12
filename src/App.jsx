import { useState } from 'react'
import './App.css'

const allClass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, , 11, 12]
const MALE = 'male'
const FEMALE = 'female'
const startedBirth = new Date('2000-1-1').getTime()
const endedBirth = new Date('2009-12-31').getTime()
function App() {
  const [first, setFirst] = useState('')
  const [middle, setMiddle] = useState('')
  const [last, setLast] = useState('')
  const [gender, setGender] = useState(null)
  const [cls, setCls] = useState(null)
  const [rate, setRate] = useState(0)
  const [birth, setBirth] = useState(null)
  const [submit, setSubmit] = useState(false)

  const isValidFirstName = !!first
  const isValidLastName = !!last
  const isValidGender = !!gender
  const isValidBirth = !!birth
  const isCorrectBirth = startedBirth < new Date(birth).getTime() && new Date(birth).getTime() < endedBirth
  const handleChangeFirst = (e) => {
    setFirst(e.target.value)
  }
  const handleChangeMiddle = (e) => {
    setMiddle(e.target.value)
  }
  const handleChangeLast = (e) => {
    setLast(e.target.value)
  }
  const handleChageGender = (e) => {
    setGender(e.target.value)
  }
  const handleChangeClass = (e) => {
    console.log(e.target.value)
    setCls(e.target.value)
  }
  const handleChangeRate = (e) => {
    setRate(e.target.value)
  }
  const handleChangeBirthday = (e) => {
    const birthday = e.target.value
    setBirth(birthday)
  }



  const handleSubmit = () => {
    setSubmit(true)
    if (!isValidFirstName || !isValidLastName || !isValidGender || !isValidBirth) {
      return
    }

    console.log({
      name: `${first} ${last} ${middle}`,
      gender,
      birthday: birth,
      class: parseInt(cls),
      rate: parseInt(rate)
    })
  }


  const getTime = () => {
    console.log(startedBirth, endedBirth)
  }

  return (
    <div className='student-submit-form w-1/3 min-w-[640px] bg-zinc-700 shadow-2xl mt-8 mx-auto px-7 py-8 rounded-md text-white flex flex-col gap-5'>
      <div className='name-input flex flex-wrap gap-2'>
        <div className='flex flex-col flex-1'>
          <label htmlFor="first-name">* First Name</label>
          <input id='first-name' type="text" value={first} onChange={handleChangeFirst} className='border-[1px] border-solid rounded border-zinc-300 text-black' />
          <div className='min-h-[20px]'>{!isValidFirstName && submit && <span className='text-red-500'>First Name is require</span>}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <label htmlFor="middle-name">Middle Name</label>
          <input id='middle-name' type="text" value={middle} onChange={handleChangeMiddle} className='border-[1px] border-solid rounded border-zinc-300 text-black' />
        </div>
        <div className='flex flex-col flex-1'>
          <label htmlFor="last-name">* Last Name</label>
          <input id='last-name' type="text" value={last} onChange={handleChangeLast} className='border-[1px] border-solid rounded border-zinc-300 text-black' />
          <div className='min-h-[20px]'>{!isValidLastName && submit && <span className='text-red-500'>Last Name is require</span>}</div>
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='gender flex flex-col'>
          <span>* Gender</span>
          <div>
            <input
              type="radio"
              id={MALE}
              value={MALE}
              onChange={handleChageGender}
              checked={gender === MALE}
            /><label htmlFor={MALE}>Nam</label>

            <input
              type="radio"
              id={FEMALE}
              value={FEMALE}
              onChange={handleChageGender}
              checked={gender === FEMALE}
            /><label htmlFor={FEMALE}>Nữ</label>
          </div>
          <div className='min-h-[20px]'>{!isValidGender && submit && <span className='text-red-500'>Gender is require</span>}</div>
        </div>
        <div className='birthday flex flex-col'>
          <span>* Birthday</span>
          <input
            type="date"
            className='border-[1px] border-solid rounded border-zinc-300 text-black'
            min='2000-01-01'
            max='2009-12-31'
            onChange={handleChangeBirthday} />
          <div className='min-h-[20px]'>
            {!birth && submit &&
              <span className='text-red-500'>Birthday is require
              </span>}
            {!isCorrectBirth && submit && <span className='text-red-500'>
              Wrong birthday
            </span>}
          </div>

        </div>
      </div>

      <div>
        <span>* Class</span>
        <select className='border-[1px] border-solid rounded border-zinc-300 text-black w-20' onChange={handleChangeClass}>
          {allClass.map((cls, idx) =>
            <option key={idx} value={cls}>{cls}</option>
          )}
        </select>
      </div>

      <div className='flex justify-center items-center gap-2'>
        <span>0</span>
        <input type="range" min={0} max={10} step={1} value={rate} onChange={handleChangeRate} className='w-2/4' />
        <span>10</span>
      </div>
      <button className='border-[1px] border-solid bg-white text-black px-3 py-2 rounded-md w-full' onClick={handleSubmit}>Submit</button>
      <button onClick={getTime}>time</button>
    </div>

  )
}

export default App
