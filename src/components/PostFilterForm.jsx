import React, { useState, useRef } from 'react';

function PostFilterForm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const { onSubmit } = props;
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) {
      return;
    }

    //clear timeout if exist
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value
      }
      onSubmit(formValues);
    }, 300)

  }

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  )
}

export default PostFilterForm
