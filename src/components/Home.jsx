import React from 'react'

function Home() {
  return (
    <div>
        <div className='flex justify-center items-center py-40'>
          <form action='#'>
            <input type="file" />
            <button type='submit' className=''>
              Upload File
            </button>
          </form>
        </div>
    </div>
  )
}

export default Home