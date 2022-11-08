import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import {
	BodyTemplate1,
	BodyTemplate2,
	BodyTemplate3,
	BodyTemplate6,
	BodyTemplate7,
	ListTemplate1,
	ListTemplate2,
	ListItem2,
} from './AlexsaTemplate.style';
import 'pure-react-carousel/dist/react-carousel.es.css';

const renderBodyTemplate1 = (JSONObject, deviceMode) => {
	return (
		<BodyTemplate1 background={JSONObject.backgroundImage} deviceMode={deviceMode}>
			<h3>{JSONObject.title}</h3>
			<h2>{JSONObject.textContent}</h2>
		</BodyTemplate1>
	);
};

const renderBodyTemplate2 = (JSONObject, deviceMode) => {
	return (
		<BodyTemplate2 JSONObject={JSONObject} deviceMode={deviceMode}>
			<h3>{JSONObject.title}</h3>
			<div className="content">
				<h2>{JSONObject.textContent}</h2>
				<img src={JSONObject.image} alt="" />
			</div>
		</BodyTemplate2>
	);
};

const renderBodyTemplate3 = (JSONObject, deviceMode) => {
	return (
		<BodyTemplate3 JSONObject={JSONObject} deviceMode={deviceMode}>
			<h3>{JSONObject.title}</h3>
			<div className="content">
				<img src={JSONObject.image} alt="" />
				<h2>{JSONObject.textContent}</h2>
			</div>
		</BodyTemplate3>
	);
};

const renderBodyTemplate6 = (JSONObject, deviceMode) => {
	return (
		<BodyTemplate6 background={JSONObject.backgroundImage} deviceMode={deviceMode}>
			<h2>{JSONObject.textContent}</h2>
		</BodyTemplate6>
	);
};

const renderBodyTemplate7 = (JSONObject, deviceMode) => {
	return (
		<BodyTemplate7 JSONObject={JSONObject} deviceMode={deviceMode}>
			<h3>{JSONObject.title}</h3>
			<div className="content">
				<img src={JSONObject.image.sources[0].url} alt="" />
			</div>
		</BodyTemplate7>
	);
};

const renderListTemplate1 = (JSONObject, deviceMode) => {
	return (
		<ListTemplate1 JSONObject={JSONObject} deviceMode={deviceMode}>
			<h3>{JSONObject.title}</h3>
			<div className="content">
				{JSONObject.listItems.map((item, index) => {
					if (deviceMode === 'mobile') {
						return (
							<div className="item" key={item.token}>
								<label>{index}</label>
								<div className="middle">
									<img src={item.image} alt="" />
									<div className="text">
										<h1>{item.textContent.primaryText}</h1>
										<h3>{item.textContent.secondaryText}</h3>
										<h1>{item.textContent.tertiaryText}</h1>
									</div>
								</div>
							</div>
						);
					}
						return (
							<div className="item" key={item.token}>
								<label>{index}</label>
								<div className="middle">
									<img src={item.image} alt="" />
									<div className="text">
										<h1>{item.textContent.primaryText}</h1>
										<h3>{item.textContent.secondaryText}</h3>
									</div>
								</div>
								<h1>{item.textContent.tertiaryText}</h1>
							</div>
						);

				})}
			</div>
		</ListTemplate1>
	);
};

const renderListTemplate2 = (JSONObject, deviceMode) => {
	if (deviceMode === 'mobile') {
		return (
			<CarouselProvider naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={3}>
				<Slider>
					{JSONObject.listItems.map((item, index) => {
						return (
							<Slide index={index} key={item.token}>
								<ListItem2 background={item.image}>
									<h1>{item.textContent.primaryText}</h1>
									<h3>{item.textContent.secondaryText}</h3>
									<h3>
										{JSONObject.listItems.length}|{index + 1}
									</h3>
								</ListItem2>
							</Slide>
						);
					})}
				</Slider>
			</CarouselProvider>
		);
	}
		return (
			<ListTemplate2 JSONObject={JSONObject} deviceMode={deviceMode}>
				<h3>{JSONObject.title}</h3>
				<div className="content">
					{JSONObject.listItems.map((item, index) => {
						return (
							<div className="item" key={item.token}>
								<img src={item.image} alt="" />
								<label>
									{index} {item.textContent.primaryText}
								</label>
								<h3>{item.textContent.secondaryText}</h3>
							</div>
						);
					})}
				</div>
			</ListTemplate2>
		);

};

const generateJSONToUI = (JSONObject, deviceMode) => {
	const { type } = JSONObject;
	return (
		<>
			{type === 'BodyTemplate1' && renderBodyTemplate1(JSONObject, deviceMode)}
			{type === 'BodyTemplate2' && renderBodyTemplate2(JSONObject, deviceMode)}
			{type === 'BodyTemplate3' && renderBodyTemplate3(JSONObject, deviceMode)}
			{type === 'BodyTemplate6' && renderBodyTemplate6(JSONObject, deviceMode)}
			{type === 'BodyTemplate7' && renderBodyTemplate7(JSONObject, deviceMode)}
			{type === 'ListTemplate1' && renderListTemplate1(JSONObject, deviceMode)}
			{type === 'ListTemplate2' && renderListTemplate2(JSONObject, deviceMode)}
		</>
	);
};

export default generateJSONToUI;
