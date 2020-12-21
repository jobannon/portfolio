import React, { lazy } from 'react'
import LoadingStar from './loadingStar.png'

const LoadingAnimation = ()=> {
	return(
			<React.Fragment>
				<img src={LoadingStar} alt="loading" height='300' class="rotate"></img>
			</React.Fragment>
	)
}

export default LoadingAnimation