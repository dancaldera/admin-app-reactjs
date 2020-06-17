import React from "react"

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>1 of 3</div>
        <div className='col-8'>
          <div className='card'>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                  ></input>
                  <small id='emailHelp' className='form-text text-muted'>
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputPassword1'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                  ></input>
                </div>
                <div className='form-group form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='exampleCheck1'
                  ></input>
                  <label className='form-check-label' htmlFor='exampleCheck1'>
                    Check me out
                  </label>
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='col'>3 of 3</div>
      </div>
    </div>
  )
}

export default Home
