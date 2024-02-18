import Image from 'next/image'
import Hello from './componenet/hello';
import SnakeGame from './componenet/snakeGame';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-0 bg-primary">
      <div className="flex flex-row justify-between w-2/3 mx-auto my-auto bg-red-300">
        <Hello />
        <SnakeGame />
      </div>
    </main>
  )
}
