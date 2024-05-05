import { ComponentType, ReactNode, useState } from 'react';
import { FaAngleRight, FaAngleDown, FaXmark } from 'react-icons/fa6';

type WorkBoxProps = {
  children?: ReactNode;
  Element: ComponentType;
  UiElements?: Array<ComponentType>;
};

export default function WorkBox({
  children,
  Element,
  UiElements,
}: WorkBoxProps) {
  const [vis, setVis] = useState(true);

  function handleVisChange() {
    setVis(!vis);
  }

  return (
    <>
      <div className='bg-gray-500 rounded-md p-5 h-full'>
        <div className='grid grid-cols-3 gap-4'>
          {UiElements &&
            UiElements.map((UiElement, idx) => {
              return (
                <div
                  className='z-50 items-center justify-center'
                  key={`uielement-${idx}`}
                >
                  <UiElement />
                </div>
              );
            })}
          <div className='basis-1/2 justify-end justify-items-end justify-self-end flex-row space-x-5 mb-5'>
            {vis ? (
              <button onClick={handleVisChange} className='bg-red-50'>
                <FaAngleDown color='black' />
              </button>
            ) : (
              <button onClick={handleVisChange} className='bg-red-50'>
                <FaAngleRight color='black' />
              </button>
            )}
            <button className='bg-red-50'>
              <FaXmark color='black' />
            </button>
          </div>
        </div>
        <Element />
        {children}
      </div>
    </>
  );
}
