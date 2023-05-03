'use client'

import { AnimateCover } from '@/components/AnimateCover';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Home(): JSX.Element {
  const [ref] = useScrollReveal()
  return (
    <main className='main' ref={ref}>
      <h1 className=''>hello</h1>
      <AnimateCover animName='scaleX'>
        <h2 className='popy'>hello boo</h2>
        <div>
          <p style={{ color: 'cyan' }}>wahala</p>
          <h4>problem dey like dis ooh

          </h4>
        </div>
      </AnimateCover>
      <h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div><h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div><h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div><h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div><h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div><h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div><h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div><h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div><h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div><h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div><h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div><h2 className='popy'>hello boo</h2>
      <div>
        <p style={{ color: 'cyan' }}>wahala</p>
        <h4>problem dey like dis ooh

        </h4>
      </div>
      <AnimateCover >
        <h2 className='popy'>hello wahala</h2>
        <div>
          <p style={{ color: 'cyan' }}>wahala</p>
          <h4>problem dey l

          </h4>
        </div>
      </AnimateCover>
    </main>
  )
}
