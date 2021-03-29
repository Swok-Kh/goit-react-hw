import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import MainContainer from './components/MainContainer';
import ScrollTop from './components/ScrollTop';
import debounce from 'lodash.debounce';
import Title from './components/Title';

class App extends Component {
  state = {
    query: '',
    scroll: 0,
  };
  componentDidMount() {
    window.addEventListener('scroll', this.debouncedUpdateScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedUpdateScroll);
  }
  debouncedUpdateScroll = debounce(() => {
    this.updateScroll();
  }, 50);
  updateScroll = () => {
    const { scrollY } = window;
    const { scroll } = this.state;
    if (scrollY !== scroll) this.setState({ scroll: scrollY });
  };
  handleSearch = query => {
    if (query === this.state.query || query === '') return;
    this.setState({ query });
  };
  render() {
    const { query, scroll } = this.state;
    return (
      <>
        <MainContainer>
          {query ? (
            <ImageGallery query={query} handleSearch={this.handleSearch} />
          ) : (
              <Title>Nothing to show. Enter search query.</Title>
            )}
        </MainContainer>
        <Searchbar onSubmit={this.handleSearch} />
        {scroll > 200 && <ScrollTop />}
      </>
    );
  }
}

export default App;
