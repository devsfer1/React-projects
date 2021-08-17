export function LoginForm(): JSX.Element {
  return (
    <form className='flex-col bg-gray-600'>
      <div>
        <input
          type='text'
          className='bg-primary-darkLight'
          placeholder='Type your name'
        />
      </div>
      <div>
        <input
          type='password'
          className='bg-primary-darkLight'
          placeholder='Type your password'
        />
      </div>
      <input type='submit' className='bg-primary-darkLight' />
    </form>
  );
}
