import React from 'react';

function OtherInfo({ formData, setFormData }) {
	return (
		<div className='other-info-container'>
			<input
				type='text'
				placeholder='Nationality...'
				value={formData.nationality}
				onChange={(e) =>
					setFormData({ ...formData, nationality: e.target.value })
				}
			/>
			<input
				type='text'
				placeholder='Other...'
				value={formData.nationality}
				onChange={(e) =>
					setFormData({ ...formData, nationality: e.target.value })
				}
			/>
		</div>
	);
}

export default OtherInfo;
