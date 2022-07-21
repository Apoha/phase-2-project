import React, {useState} from 'react'



function Reviews({moviesUpdate}) {

    const [reviews, setReview] = useState("")

    


    function handleSubmit(e) {
        e.preventDefault()
        const reviewData = {
          reviews
        }



        fetch('http://localhost:3500/movies', 
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData),
          });
      
         moviesUpdate(reviewData)

    }





    

  return (
    <div>Reviews
 <form label="Add Review" className='reviewStyle' onSubmit={handleSubmit}>
 <input type="text" required placeholder='make a Comment' value={reviews} onChange={(e) => {setReview(e.target.value) }} />
 <button type="submit">Submit</button>
 </form>

    </div>
  )
}

export default Reviews