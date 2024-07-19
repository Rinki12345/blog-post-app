 
const api_url = 'https://jsonplaceholder.typicode.com/posts';
 

export const fetchPosts = () => {
    return fetch(api_url).then((response) => {
        if(!response.ok){
            throw new Error('Response not work');
        }
        return response.json();
    }).then(data => {
        console.log(data);
        return data;
    }).catch(error => {
        console.log('Error', error);
    })
};

export const createPost = async (post) => {
    const response = await fetch(api_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    if (!response.ok) throw new Error('Failed to create post');
    return response.json();
  };
        
    

