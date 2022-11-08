import * as AdaptiveCards from 'adaptivecards';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import { Wrapper } from './TeamsCard.style';
import LogoImg from '../../../../../images/logo.svg';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class TeamsCard extends React.Component {
	constructor(props) {
		super(props);
		// Create this in the constructor so we don't create it every render
		this.adaptiveCard = new AdaptiveCards.AdaptiveCard();
	}

	componentWillUnmount() {
		// Remove all references
		delete this.adaptiveCard;
	}

	render() {
		const { element } = this.props;

		this.adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
			fontFamily: 'Segoe UI, Helvetica Neue, sans-serif',
			// More host config options
		});

		this.adaptiveCard.onExecuteAction = function (action) {
			alert('Ow!');
		};

		try {
			if (element.JSON.type === 'Carousel') {
				return (
					<Wrapper>
						<div className="profile">
							<img src={LogoImg} alt="logo" width={34} height={34} />
						</div>
						<div className="card">
							<label className="card-title">
								Hydra <span className="date">01/20 3:30</span>
							</label>
							<CarouselProvider naturalSlideWidth={100} naturalSlideHeight={130} totalSlides={3}>
								<Slider>
									{element.JSON.body.map((item, index) => {
										this.adaptiveCard.parse(item);
										const result = this.adaptiveCard.render();
										return (
											<Slide index={index}>
												<div
													style={this.props.style}
													ref={n => {
														n && !n.hasChildNodes() && n.appendChild(result);
													}}
												/>
											</Slide>
										);
									})}
								</Slider>
								<ButtonBack className="left-button">&lt;</ButtonBack>
								<ButtonNext className="right-button">&gt;</ButtonNext>
								<DotGroup className="dot-group" />
							</CarouselProvider>
						</div>
					</Wrapper>
				);
			}
				this.adaptiveCard.parse(this.props.element.JSON);
				const result = this.adaptiveCard.render();
				return (
					<Wrapper>
						<div className="profile">
							<img src={LogoImg} alt="logo" width={34} height={34} />
						</div>
						<div className="card">
							<label className="card-title">
								Hydra <span className="date">01/20 3:30</span>
							</label>
							<div
								style={this.props.style}
								ref={n => {
									n && !n.hasChildNodes() && n.appendChild(result);
								}}
							/>
						</div>
					</Wrapper>
				);

		} catch (err) {
			console.error(err);
			if (this.props.onError) {
				return this.props.onError(err);
			}
				return <div style={{ color: 'red' }}>{err.message}</div>;

		}
	}
}
