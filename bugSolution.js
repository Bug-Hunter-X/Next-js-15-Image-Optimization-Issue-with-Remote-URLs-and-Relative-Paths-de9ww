```javascript
import Image from 'next/image';

function MyComponent() {
  return (
    <div>
      <Image
        src='https://example.com/images/about/team.jpg'
        alt='Team Image'
        width={500}
        height={300}
      />
    </div>
  );
}

export default MyComponent; 
```