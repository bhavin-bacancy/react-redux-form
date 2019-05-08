// import React from 'react'

// const renderField = ({ input, label, type, meta: { touched, error } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type}/>
//       {touched && error && <span style={{color:'red'}}> &nbsp;&nbsp;{error}</span>}
//     </div>
//   </div>
// )

// export default renderField


import React from 'react';
import Select from 'react-select';
import Textarea from 'react-textarea-autosize';

const customFieldelements = ['textarea', 'select'];

const renderField = ({
	input, label, type, meta: { touched, error }, minRows, placeholder, name, selected, dropdownArray,
	onChange, _blur,
}) => (
		<>
			{
				(customFieldelements && customFieldelements.indexOf(type) <= -1)
				&& <div>
					<label>{label}</label>
					<div className="form-group">
						<input className="form-control input-sm bounceIn animation-delay2" {...input} placeholder={label} type={type} />
						{touched && error && <span style={{ color: 'red' }}>{error}</span>}
					</div>
				</div>
			}
			{(type === 'textarea')
				&& <div className="form-group">
					<label>{label}</label>
					<div>
						<Textarea
							{...input} placeholder={label}
							// {...(_blur) ? { onBlur: (event) => { _onBlur({ _blur, input, autoFocusStatus, updateAutoFocusStatus }) } } : {}}
							className="form-control input-sm bounceIn animation-delay2"
							minRows={minRows || 1}
						/>
						{touched && error && <span style={{ color: 'red' }}>{error}</span>}
					</div>
				</div>
			}
			{
				(type === 'select')
					&& <div className="form-group">
						{
							label
								&& <div>
									<label>{label}</label>
								</div>
						}
						<Select
							name={name}
							value={selected}
							options={dropdownArray}
							{...input}
							{...(onChange) && { onChange: () => input.onChange(input.value) }}
							// eslint-disable-next-line no-unused-expressions
							onBlur={(event) => { _blur ? _blur(input.value.value) : input.onBlur(input.value); }}
							placeholder={placeholder}
						/>
						{touched && error && <span style={{ color: 'red' }}>{error}</span>}
					</div>
			}
		</>
);

export default renderField;
