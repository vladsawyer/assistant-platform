'use client'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import Indicator from '@/app/components/header/indicator'

type ResultProps = {
  status: 'running' | 'succeeded' | 'failed' | 'stopped'
  time?: number
  tokens?: number
}

const StatusPanel: FC<ResultProps> = ({
  status,
  time,
  tokens,
}) => {
  const { t } = useTranslation()

  return (
    <div
      className={cn(
        'flex px-3 py-[10px] rounded-lg border-[0.5px] border-[rbga(0,0,0,0.05)] shadow-xs',
        status === 'running' && '!bg-primary-50',
        status === 'succeeded' && '!bg-[#ecfdf3]',
        status === 'failed' && '!bg-[#fef3f2]',
        status === 'stopped' && '!bg-gray-200',
      )}
    >
      <div className='mr-24'>
        <div className='text-xs leading-[18px] font-medium text-gray-400'>{t('runLog.resultPanel.status')}</div>
        <div
          className={cn(
            'flex items-center gap-1 h-[18px] text-xs leading-3 font-semibold',
            status === 'running' && '!text-primary-600',
            status === 'succeeded' && '!text-[#039855]',
            status === 'failed' && '!text-[#d92d20]',
            status === 'stopped' && '!text-gray-700',
          )}
        >
          {status === 'running' && (
            <span>Running</span>
          )}
          {status === 'succeeded' && (
            <>
              <Indicator color={'green'} />
              <span>SUCCESS</span>
            </>
          )}
          {status === 'failed' && (
            <>
              <Indicator color={'red'} />
              <span>FAIL</span>
            </>
          )}
          {status === 'stopped' && (
            <>
              <Indicator color={'gray'} />
              <span>STOP</span>
            </>
          )}
        </div>
      </div>
      <div className='mr-24'>
        <div className='text-xs leading-[18px] font-medium text-gray-400'>{t('runLog.resultPanel.time')}</div>
        <div className='flex items-center gap-1 h-[18px] text-gray-700 text-xs leading-3 font-semibold'>
          {status === 'running' && (
            <div className='w-16 h-2 rounded-sm bg-[rgba(0,0,0,0.05)]'/>
          )}
          {status !== 'running' && (
            <span>{`${time}s`}</span>
          )}
        </div>
      </div>
      <div className='mr-24'>
        <div className='text-xs leading-[18px] font-medium text-gray-400'>{t('runLog.resultPanel.tokens')}</div>
        <div className='flex items-center gap-1 h-[18px] text-gray-700 text-xs leading-3 font-semibold'>
          {status === 'running' && (
            <div className='w-20 h-2 rounded-sm bg-[rgba(0,0,0,0.05)]'/>
          )}
          {status !== 'running' && (
            <span>{`${tokens} Tokens`}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default StatusPanel
