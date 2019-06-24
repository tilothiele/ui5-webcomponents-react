# `VariantManagement`

#### `Render without crashing`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(VariantManagement)) variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4">
      <WithStyles(VariantManagement) variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" theme={{...}} classes={{...}}>
        <VariantManagement variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" theme={{...}} classes={{...}}>
          <Popover open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" openBy={{...}} footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center">
            <div style={{...}} onClick={[Function]}>
              <div className="VariantManagement-VariantManagement---">
                <span className="VariantManagement-VariantManagementText---">
                  <Title level="H4">
                    <WithWebComponent theme={{...}} level="H4">
                      <ui5-title level="H4" class="">
                        Variant 1
                      </ui5-title>
                    </WithWebComponent>
                  </Title>
                </span>
                <Button design="Transparent" icon="navigation-down-arrow">
                  <WithWebComponent theme={{...}} design="Transparent" icon="navigation-down-arrow">
                    <ui5-button design="Transparent" icon="navigation-down-arrow" class="" />
                  </WithWebComponent>
                </Button>
              </div>
            </div>
            <WithTheme(WithWebComponent) open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center" innerComponentRef={[Function]}>
              <WithWebComponent theme={{...}} open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center" innerComponentRef={[Function]}>
                <ui5-popover open={false} header-text="Variants" placement-type="Bottom" tooltip={[undefined]} initial-focus={{...}} horizontal-align="Center" vertical-align="Center" inner-component-ref={[Function]} class="">
                  <Button className="VariantManagement-footer---" onPress={[Function]} design="Emphasized" data-ui5-slot="footer">
                    <WithWebComponent theme={{...}} className="VariantManagement-footer---" onPress={[Function]} design="Emphasized" data-ui5-slot="footer">
                      <ui5-button design="Emphasized" data-ui5-slot="footer" class="VariantManagement-footer---">
                        Cancel
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                  <WithTheme(WithWebComponent) onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
                    <WithWebComponent theme={{...}} onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
                      <ui5-list mode="SingleSelect" header-text="" footer-text="" no-data-text="" separators="All" class="">
                        <StandardListItem style={{...}} data-key="1" type="Active" selected={true} infoState="None">
                          <WithWebComponent theme={{...}} style={{...}} data-key="1" type="Active" selected={true} infoState="None">
                            <ui5-li selected={true} style={{...}} data-key="1" type="Active" info-state="None" class="">
                              Variant 1
                            </ui5-li>
                          </WithWebComponent>
                        </StandardListItem>
                        <StandardListItem style={{...}} data-key="2" type="Active" selected={false} infoState="None">
                          <WithWebComponent theme={{...}} style={{...}} data-key="2" type="Active" selected={false} infoState="None">
                            <ui5-li style={{...}} data-key="2" type="Active" info-state="None" class="">
                              Variant 2
                            </ui5-li>
                          </WithWebComponent>
                        </StandardListItem>
                      </ui5-list>
                    </WithWebComponent>
                  </WithTheme(WithWebComponent)>
                </ui5-popover>
              </WithWebComponent>
            </WithTheme(WithWebComponent)>
          </Popover>
        </VariantManagement>
      </WithStyles(VariantManagement)>
    </Jss(WithStyles(VariantManagement))>
  </ThemeProvider>
</ThemeProvider>
```
