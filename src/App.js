
import './App.css';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Banner, Button, ButtonGroup, Checkbox, FormLayout, Frame, HorizontalStack, LegacyCard, LegacyStack, Page, Popover, RangeSlider, Select, Tabs, Text, TextField, TopBar } from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { PlanFilledMinor, PlayCircleMajor, QuestionMarkMajor, ToolsMajor } from '@shopify/polaris-icons';
import ReactColorPicker from '@super-effective/react-color-picker';

function App() {

  const logo = {
    width: 30,
    topBarSource: 'https://iconito.staging.royal-apps.io/images/iconito-1200.png',
    accessibilityLabel: 'Iconito - Trust badges & icons',
  };

  const logotext = (<Text variant='bodyMd' fontWeight='semibold' >Iconito - Trust badges & icons</Text>)

  const userMenuMarkup = (
    <LegacyStack alignment='center' >
      <Button primary icon={PlayCircleMajor}>Tutorial</Button>
      <Button icon={PlanFilledMinor}>Plan List</Button>
      <Button icon={ToolsMajor}>Integrations</Button>
      <Button icon={QuestionMarkMajor}>Help Center</Button>
    </LegacyStack>
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
       logoSuffix={logotext}
    />
  );

  const [selected, setSelected] = useState(2);
  const handleTabChange = useCallback((selectedTabIndex) => setSelected(selectedTabIndex), []);
  const tabs = [
    {
      id: 'block',
      content: 'Block',
      panelID: 'block-content-1',
    },
    {
      id: 'icons',
      content: 'Icons',
      panelID: 'icons-content-1',
    },
    {
      id: 'style',
      content: 'Style',
      panelID: 'style-content-1',
    },
  ];

  const [iconsize, setIconsize] = useState(50);
  const handleIconSizeChange = useCallback((value) => setIconsize(value), []);

  const [backgroundcolor, setBackgroundcolor] = useState('#ffffff');
  const onbackgroundcolorChange = (updatedColor) => { setBackgroundcolor(updatedColor); };

  const [titlecolor, setTitlecolor] = useState('#000000');
  const ontitlecolorChange = (updatedColor) => { setTitlecolor(updatedColor); };

  const [iconcolor, setIconcolor] = useState('#000000');
  const oniconcolorChange = (updatedColor) => { setIconcolor(updatedColor); };

  const [subtitlecolor, setSubtitlecolor] = useState('#000000');
  const onsubtitlecolorChange = (updatedColor) => { setSubtitlecolor(updatedColor); };

  const [transparentbg, setTransparentbg] = useState(false);
  const handletransparentbgChange = useCallback((newChecked) => setTransparentbg(newChecked), []);

  const [titlefontsize, setTitlefontsize] = useState(14);
  const handletitlefontsizeChange = useCallback((value) => setTitlefontsize(value), []);
  const [titlefontstyle, setTitlefontstyle] = useState('bold');
  const handletitlefontstyleChange = useCallback((value) => setTitlefontstyle(value), []);
  const titlefontstyleoptions = [
    { label: 'Bold', value: 'bold' },
    { label: 'Medium', value: 'medium' },
    { label: 'Regular', value: 'regular' },
    { label: 'Semibold', value: 'semibold' },
  ];

  const [subtitlefontsize, setSubtitlefontsize] = useState(12);
  const handlesubtitlefontsizeChange = useCallback((value) => setSubtitlefontsize(value), []);
  const [subtitlefontstyle, setSubtitlefontstyle] = useState('regular');
  const handlesubtitlefontstyleChange = useCallback((value) => setSubtitlefontstyle(value), []);
  const subtitlefontstyleoptions = [
    { label: 'Bold', value: 'bold' },
    { label: 'Medium', value: 'medium' },
    { label: 'Regular', value: 'regular' },
    { label: 'Semibold', value: 'semibold' },
  ];

  const [blocksize, setBlocksize] = useState(0);
  const handleblocksizeChange = useCallback((value) => setBlocksize(value), []);
  const [goesup, setGoesup] = useState(0);
  const handlegoesupChange = useCallback((value) => setGoesup(value), []);
  const [goesdown, setGoesdown] = useState(0);
  const handlegoesdownChange = useCallback((value) => setGoesdown(value), []);
  const [blockspace, setBlockspace] = useState(0);
  const handleblockspaceChange = useCallback((value) => setBlockspace(value), []);

  /*******  SHOW COLORPICKER ICON   *******/
  const [allpopoverActive, setAllPopoverActive] = useState(null);
  const toggleallPopoverActive = (value) => { allpopoverActive === value ? setAllPopoverActive(null) : setAllPopoverActive(value) };
  const activator = (color, widget) => {
    return (
      <div
        onClick={() => toggleallPopoverActive(widget)}
        className="color-picker-preview border border-2 rounded"
        style={{
          backgroundColor: color,
          cursor: "pointer",
          width: "25px",
          height: "25px",
          borderRadius: "2rem",
          border: "1px solid #828282",
        }}
      ></div>
    )
  };

  const [selectedtab, setSelectedtab] = useState(0);
  const handleSelectedtabChange = useCallback((selectedTabIndex) => setSelectedtab(selectedTabIndex), []);
  const tabs2 = [
    {
      id: 'desktop',
      content: 'Desktop',
      panelID: 'desktop-content-1',
    },
    {
      id: 'mobile',
      content: 'Mobile',
      panelID: 'mobile-content-1',
    },
  ];

  const [loading, setLoading] = useState(false);
  const handlesavedata = () => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append('iconsize', iconsize);
    formdata.append('backgroundcolor', backgroundcolor);
    formdata.append('titlecolor', titlecolor);
    formdata.append('iconcolor', iconcolor);
    formdata.append('subtitlecolor', subtitlecolor);
    formdata.append('transparentbg', transparentbg);
    formdata.append('titlefontsize', titlefontsize);
    formdata.append('titlefontstyle', titlefontstyle);
    formdata.append('subtitlefontsize', subtitlefontsize);
    formdata.append('subtitlefontstyle', subtitlefontstyle);
    formdata.append('blocksize', blocksize);
    formdata.append('goesup', goesup);
    formdata.append('goesdown', goesdown);
    formdata.append('blockspace', blockspace);

    alert('Form submited');
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  const handledeletedata = () => {
    alert('Data deleted');
  }
  return (
    <AppProvider i18n={enTranslations}>
      <div style={{ height: '50px' }} className='headerdiv'>
        <Frame topBar={topBarMarkup} logo={logo} />
      </div>

      <Page
        backAction={{ content: 'Back' }}
        fullWidth
        title="Icon Blocks"
      >
        <HorizontalStack wrap={false} gap='5'>
          <div style={{ width: "50%" }} className='menutabs'>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
              <div style={{ margin: '10px' }}>
                {
                  tabs[selected].id === 'block' ?
                    <LegacyCard title="BLOCK" sectioned></LegacyCard>

                    : tabs[selected].id === 'icons' ?
                      <LegacyCard title="ICONS" sectioned></LegacyCard>

                      : tabs[selected].id === 'style' ?
                        <>
                          <LegacyCard>
                            <LegacyCard.Section title="ICON SIZE">
                              <LegacyStack alignment='center'>
                                <LegacyStack.Item fill>
                                  <RangeSlider
                                    value={iconsize}
                                    onChange={handleIconSizeChange}
                                    output
                                  />
                                </LegacyStack.Item>
                                <LegacyStack.Item >
                                  <div style={{ width: '100px' }}>
                                    <TextField
                                      type="number"
                                      value={iconsize}
                                      onChange={handleIconSizeChange}
                                      autoComplete="off"
                                      suffix='px'
                                    />
                                  </div>
                                </LegacyStack.Item>
                              </LegacyStack>
                            </LegacyCard.Section>

                            <LegacyCard.Section title="COLORS" >
                              <FormLayout>
                                <HorizontalStack wrap={false} gap='5'>
                                  <div style={{ width: '130px' }}>Background Color</div>
                                  <div style={{ width: '220px' }}>
                                    <TextField
                                      type="text"
                                      value={backgroundcolor}
                                      onChange={onbackgroundcolorChange}
                                      prefix={(<Popover
                                        active={allpopoverActive === 'backgroundcolor'}
                                        activator={activator(backgroundcolor, 'backgroundcolor')}
                                        autofocusTarget="first-node"
                                        onClose={() => toggleallPopoverActive('backgroundcolor')}
                                      >
                                        <div className="color_picker">
                                          <ReactColorPicker color={backgroundcolor} onChange={onbackgroundcolorChange} />
                                        </div>
                                      </Popover>)}
                                    /></div>
                                  <div style={{ width: '120px' }}>Title Color</div>
                                  <div style={{ width: '230px' }}>
                                    <TextField
                                      type="text"
                                      value={titlecolor}
                                      onChange={ontitlecolorChange}
                                      prefix={(<Popover
                                        active={allpopoverActive === 'titlecolor'}
                                        activator={activator(titlecolor, 'titlecolor')}
                                        autofocusTarget="first-node"
                                        onClose={() => toggleallPopoverActive('titlecolor')}
                                      >
                                        <div className="color_picker">
                                          <ReactColorPicker onChange={ontitlecolorChange} color={titlecolor} />
                                        </div>
                                      </Popover>)}
                                    />
                                  </div>
                                </HorizontalStack>

                                <HorizontalStack wrap={false} gap='5'>
                                  <div style={{ width: '130px' }}>Icon Color</div>
                                  <div style={{ width: '220px' }}>
                                    <TextField
                                      type="text"
                                      value={iconcolor}
                                      onChange={oniconcolorChange}
                                      prefix={(<Popover
                                        active={allpopoverActive === 'iconcolor'}
                                        activator={activator(iconcolor, 'iconcolor')}
                                        autofocusTarget="first-node"
                                        onClose={() => toggleallPopoverActive('iconcolor')}
                                      >
                                        <div className="color_picker">
                                          <ReactColorPicker onChange={oniconcolorChange} color={iconcolor} />
                                        </div>
                                      </Popover>)}
                                    />
                                  </div>
                                  <div style={{ width: '120px' }}>Subtitle Color</div>
                                  <div style={{ width: '230px' }}>
                                    <TextField
                                      type="text"
                                      value={subtitlecolor}
                                      onChange={onsubtitlecolorChange}
                                      prefix={(<Popover
                                        active={allpopoverActive === 'subtitlecolor'}
                                        activator={activator(subtitlecolor, 'subtitlecolor')}
                                        autofocusTarget="first-node"
                                        onClose={() => toggleallPopoverActive('subtitlecolor')}
                                      >
                                        <div className="color_picker">
                                          <ReactColorPicker onChange={onsubtitlecolorChange} color={subtitlecolor} />
                                        </div>
                                      </Popover>)}
                                    />
                                  </div>
                                </HorizontalStack>

                                <Checkbox
                                  label="Transparent Background"
                                  checked={transparentbg}
                                  onChange={handletransparentbgChange}
                                />
                              </FormLayout>
                            </LegacyCard.Section>

                            <LegacyCard.Section title='TYPOGRAPHY'>
                              <FormLayout>
                                <HorizontalStack wrap={false} gap='5'>
                                  <div style={{ width: '50%' }}>
                                    <TextField
                                      label="Title font size"
                                      type="number"
                                      value={titlefontsize}
                                      onChange={handletitlefontsizeChange}
                                      suffix='px'
                                    />
                                  </div>
                                  <div style={{ width: '50%' }}>
                                    <Select
                                      label="Title font style"
                                      options={titlefontstyleoptions}
                                      onChange={handletitlefontstyleChange}
                                      value={titlefontstyle}
                                    />
                                  </div>
                                </HorizontalStack>

                                <HorizontalStack wrap={false} gap='5'>
                                  <div style={{ width: '50%' }}>
                                    <TextField
                                      label="Subtitle font size"
                                      type="number"
                                      value={subtitlefontsize}
                                      onChange={handlesubtitlefontsizeChange}
                                      suffix='px'
                                    />
                                  </div>
                                  <div style={{ width: '50%' }}>
                                    <Select
                                      label="Subtitle font style"
                                      options={subtitlefontstyleoptions}
                                      onChange={handlesubtitlefontstyleChange}
                                      value={subtitlefontstyle}
                                    />
                                  </div>
                                </HorizontalStack>
                              </FormLayout>
                            </LegacyCard.Section>

                            <LegacyCard.Section title='SPACING'>
                              <FormLayout>
                                <Text variant='bodyMd'>Block Size</Text>
                                <LegacyStack alignment='center'>
                                  <LegacyStack.Item fill>
                                    <RangeSlider
                                      value={blocksize}
                                      onChange={handleblocksizeChange}
                                      output
                                    />
                                  </LegacyStack.Item>
                                  <LegacyStack.Item >
                                    <div style={{ width: '100px' }}>
                                      <TextField
                                        type="number"
                                        value={blocksize}
                                        onChange={handleblocksizeChange}
                                        autoComplete="off"
                                        suffix='px'
                                      />
                                    </div>
                                  </LegacyStack.Item>
                                </LegacyStack>

                                <Text variant='bodyLg' fontWeight='semibold'>BORDER LOCATION</Text>
                                <LegacyStack alignment='center' distribution='fill'>
                                  <TextField
                                    label="Goes up"
                                    type="number"
                                    value={goesup}
                                    onChange={handlegoesupChange}
                                    suffix='px'
                                  />
                                  <TextField
                                    label="Goes down"
                                    type="number"
                                    value={goesdown}
                                    onChange={handlegoesdownChange}
                                    suffix='px'
                                  />
                                </LegacyStack>

                                <Text variant='bodyMd'>Space in between Block</Text>
                                <LegacyStack alignment='center'>
                                  <LegacyStack.Item fill>
                                    <RangeSlider
                                      value={blockspace}
                                      onChange={handleblockspaceChange}
                                      output
                                    />
                                  </LegacyStack.Item>
                                  <LegacyStack.Item >
                                    <div style={{ width: '100px' }}>
                                      <TextField
                                        type="number"
                                        value={blockspace}
                                        onChange={handleblockspaceChange}
                                        autoComplete="off"
                                        suffix='%'
                                      />
                                    </div>
                                  </LegacyStack.Item>
                                </LegacyStack>
                              </FormLayout>
                            </LegacyCard.Section>
                          </LegacyCard>

                          <div style={{ margin: '15px 0' }}>
                            <ButtonGroup >
                              <Button primary size='large' onClick={() => handlesavedata()} loading={loading}>Save</Button>
                              <Button destructive size='large' onClick={() => handledeletedata()}>Delete</Button>
                            </ButtonGroup>
                          </div>
                        </>
                        : null
                }
              </div>
            </Tabs>
          </div>

          <div style={{ width: "50%" }} className='previewtabs'>
            <LegacyCard sectioned>
              <LegacyStack distribution='center'>
                <Tabs tabs={tabs2} selected={selectedtab} onSelect={handleSelectedtabChange} fitted></Tabs>
              </LegacyStack>

              {
                tabs2[selectedtab].id === 'desktop' ?
                  <div className='desktoppreviewicons'>
                    <LegacyCard>
                      <div style={{ backgroundColor: backgroundcolor, gap: blockspace + '%' }} className='showiconsdiv'>
                        <div className='showicons'>
                          <span style={{ fontSize: iconsize + 'px', lineHeight: (parseInt(iconsize) + 10) + 'px', display: 'block', color: iconcolor }}>😘</span>
                          <label style={{ fontSize: titlefontsize + 'px', fontWeight: titlefontstyle, display: 'block', color: titlecolor }}>Any Question?</label>
                          <label style={{ fontSize: subtitlefontsize + 'px', fontWeight: subtitlefontstyle, display: 'block', color: subtitlecolor }}>Contact us now</label>
                        </div>
                        <div className='showicons'>
                          <span style={{ fontSize: iconsize + 'px', lineHeight: (parseInt(iconsize) + 10) + 'px', display: 'block', color: iconcolor }}>😍</span>
                          <label style={{ fontSize: titlefontsize + 'px', fontWeight: titlefontstyle, display: 'block', color: titlecolor }}>100% Guaranteed</label>
                          <label style={{ fontSize: subtitlefontsize + 'px', fontWeight: subtitlefontstyle, display: 'block', color: subtitlecolor }}>Love it and get your money back</label>
                        </div>
                        <div className='showicons'>
                          <span style={{ fontSize: iconsize + 'px', lineHeight: (parseInt(iconsize) + 10) + 'px', display: 'block', color: iconcolor }}>😷</span>
                          <label style={{ fontSize: titlefontsize + 'px', fontWeight: titlefontstyle, display: 'block', color: titlecolor }}>Buyer Protection Included</label>
                          <label style={{ fontSize: subtitlefontsize + 'px', fontWeight: subtitlefontstyle, display: 'block', color: subtitlecolor }}>3 months Warranty</label>
                        </div>
                        <div className='showicons'>
                          <span style={{ fontSize: iconsize + 'px', lineHeight: (parseInt(iconsize) + 10) + 'px', display: 'block', color: iconcolor }}>😈</span>
                          <label style={{ fontSize: titlefontsize + 'px', fontWeight: titlefontstyle, display: 'block', color: titlecolor }}>Make Your Friends Jealous</label>
                          <label style={{ fontSize: subtitlefontsize + 'px', fontWeight: subtitlefontstyle, display: 'block', color: subtitlecolor }}>with our unique products</label>
                        </div>
                      </div>
                    </LegacyCard>
                  </div>
                  : tabs2[selectedtab].id === 'mobile' ?

                    <div className='mobilepreviewicons'>
                      <div className='mobilepreviewdiv'>
                        <LegacyCard>
                          <div style={{ backgroundColor: backgroundcolor, gap: blockspace + '%' }} className='showiconsdiv'>
                            <div className='showicons'>
                              <span style={{ fontSize: iconsize + 'px', lineHeight: (parseInt(iconsize) + 10) + 'px', display: 'block', color: iconcolor }}>😘</span>
                              <label style={{ fontSize: titlefontsize + 'px', fontWeight: titlefontstyle, display: 'block', color: titlecolor }}>Any Question?</label>
                              <label style={{ fontSize: subtitlefontsize + 'px', fontWeight: subtitlefontstyle, display: 'block', color: subtitlecolor }}>Contact us now</label>
                            </div>
                            <div className='showicons'>
                              <span style={{ fontSize: iconsize + 'px', lineHeight: (parseInt(iconsize) + 10) + 'px', display: 'block', color: iconcolor }}>😍</span>
                              <label style={{ fontSize: titlefontsize + 'px', fontWeight: titlefontstyle, display: 'block', color: titlecolor }}>100% Guaranteed</label>
                              <label style={{ fontSize: subtitlefontsize + 'px', fontWeight: subtitlefontstyle, display: 'block', color: subtitlecolor }}>Love it and get your money back</label>
                            </div>
                          </div>

                          <div style={{ backgroundColor: backgroundcolor, gap: blockspace + '%' }} className='showiconsdiv'>
                            <div className='showicons'>
                              <span style={{ fontSize: iconsize + 'px', lineHeight: (parseInt(iconsize) + 10) + 'px', display: 'block', color: iconcolor }}>😷</span>
                              <label style={{ fontSize: titlefontsize + 'px', fontWeight: titlefontstyle, display: 'block', color: titlecolor }}>Buyer Protection Included</label>
                              <label style={{ fontSize: subtitlefontsize + 'px', fontWeight: subtitlefontstyle, display: 'block', color: subtitlecolor }}>3 months Warranty</label>
                            </div>

                            <div className='showicons'>
                              <span style={{ fontSize: iconsize + 'px', lineHeight: (parseInt(iconsize) + 10) + 'px', display: 'block', color: iconcolor }}>😈</span>
                              <label style={{ fontSize: titlefontsize + 'px', fontWeight: titlefontstyle, display: 'block', color: titlecolor }}>Make Your Friends Jealous</label>
                              <label style={{ fontSize: subtitlefontsize + 'px', fontWeight: subtitlefontstyle, display: 'block', color: subtitlecolor }}>with our unique products</label>
                            </div>
                          </div>
                        </LegacyCard>
                      </div>
                    </div>
                    : null}
            </LegacyCard>

            <div style={{ marginTop: '10px' }}>
              <Banner
                title="For Premium features, please upgrade your plan. For only a cup of coffee (4,99/mo) you can have almost features 🚀"
                action={{ content: 'Start 3-day trial' }}
                status="warning"
              >
              </Banner>
            </div>
          </div>
        </HorizontalStack>
      </Page>
    </AppProvider>
  );
}

export default App;
