import React from 'react'

const Wrapper = (props) => {
  return (
    <section>
      <figure>
        <blockquote>
          <p>{props.quote}</p>
        </blockquote>
        <figcaption>— {props.author}</figcaption>
      </figure>
    </section>
  )
}

export default Wrapper
