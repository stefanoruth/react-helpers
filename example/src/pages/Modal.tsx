import React from 'react'
import { Modal, RandomText } from '../components'
import { Grid } from '@main/dist'

export const ModalPage: React.FunctionComponent = () => {
	return (
		<div className="p-8 min-h-screen">
			<TextModal></TextModal>
			<ConfirmModal></ConfirmModal>
		</div>
	)
}

const TextModal: React.FunctionComponent = () => {
	const [open, setOpen] = React.useState(false)

	return (
		<div>
			<button className="bg-gray-400 px-4 py-2 mb-2 hover:bg-gray-500" onClick={() => setOpen(true)}>
				Text Modal
			</button>

			{open && (
				<Modal size="lg" onClose={() => setOpen(false)} closeButton>
					<div className="p-8">
						<RandomText></RandomText>
					</div>
				</Modal>
			)}
		</div>
	)
}

const ConfirmModal: React.FunctionComponent = () => {
	const [open, setOpen] = React.useState(false)

	return (
		<div>
			<button className="bg-gray-400 px-4 py-2 mb-2 hover:bg-gray-500" onClick={() => setOpen(true)}>
				Confirm Modal
			</button>

			{open && (
				<Modal size="sm">
					<div className="p-8">
						<h1 className="text-2xl mb-4">Choose a pill</h1>

						<div className="w-full flex">
							<button className="flex-1 rounded-full p-2 text-white bg-red-400 mr-4" onClick={() => setOpen(false)}>
								Red
							</button>
							<button className="flex-1 rounded-full p-2 text-white bg-blue-400" onClick={() => setOpen(false)}>
								Blue
							</button>
						</div>
					</div>
				</Modal>
			)}
		</div>
	)
}
