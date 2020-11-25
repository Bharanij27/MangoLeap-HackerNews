export const fetchStory = async(ids) => {
    let data = await Promise.all(ids.map(async (id) =>{
        let apiCall = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
        let result = await apiCall.json();
        return result;
    }));
    return data;
}

export const fetchStories = async(type) => {
    let apiCall = await fetch(`https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`);
    let result = await apiCall.json();
    return result;
}


export const formatTime = (time) =>{
    const between = Date.now() / 1000 - Number(time)
    if (between < 3600) {
      return pluralize(~~(between / 60), ' minute')
    } else if (between < 86400) {
      return pluralize(~~(between / 3600), ' hour')
    } else {
      return pluralize(~~(between / 86400), ' day')
    }
  }
  
  function pluralize (time, label) {
    if (time === 1) {
      return time + label
    }
    return time + label + 's'
  }
  

export const formatHost = (url) => {
    const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    const parts = host.split('.').slice(-3);
    if (parts[0] === 'www') parts.shift();
    return parts.join('.');
}