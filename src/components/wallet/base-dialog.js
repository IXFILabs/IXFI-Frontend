import { Dialog, DialogTitle, Box } from '@mui/material'
import Icon from 'src/@core/components/icon'
import CloseButton from './close-connect'

const BaseDialog = ({ openModal, setOpenModal, title, width, children }) => {
  const closeDialog = () => {
    setOpenModal(false)
  }

  return (
    <Dialog
      className='connect-modal'
      onClose={closeDialog}
      open={openModal}
      sx={{
        '& .MuiDialog-paper': {
          width: width || '640px',
          maxWidth: 'none',
          backgroundImage: 'linear-gradient(to bottom, var(--violet-4), var(--violet-14))',
          backgroundColor: 'transparent !important',
          border: '1px solid var(--white-10-101)',
          borderRadius: '20px',
          overflow: 'visible'
        },
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(10, 10, 11, 0.85)' // Change background color
        }
      }}
    >
      <DialogTitle className='text-center' variant='h3' color='primary' id='connect-dialog'>
        {title}
      </DialogTitle>
      <CloseButton aria-label='close' onClick={closeDialog}>
        <Icon icon='tabler:x' color='white' fontSize='1.25rem' />
      </CloseButton>
      <Box sx={{ px: 12, py: 4 }}>{children}</Box>

      <div className='dialog-background-blur'></div>
    </Dialog>
  )
}

export default BaseDialog
