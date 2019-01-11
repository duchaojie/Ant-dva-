<ModalBox
ref={(r) => {this.modalRef = r}}
title="添加信托计划"
handleOk={this.handleOk}
confirmLoading={loading}
  >
  <FormItem
{...formProps}
label="信托计划名称"
fieldName="planName"
initialValue={active.planName}
inputProps={{ disabled: active.planName, maxLength: 20, placeholder: '最多 20 个字符' }}
/>
<FormItem
{...formProps}
label="本期规模"
fieldName="planScale"
initialValue={active.planScale}
inputProps={{ maxLength: 20, placeholder: '最多 20 个字符' }}
/>
<FormItem
{...formProps}
label="成立日"
fieldName="planStart"
initialValue={active.planStart}
inputProps={{ maxLength: 20, placeholder: '最多 20 个字符' }}
/>
<FormItem
{...formProps}
// required={false}
label="到期终止日"
fieldName="planEnd"
initialValue={active.planEnd}
  >
  {/* <Input.TextArea maxLength={50} placeholder="最多 50 个字符" /> */}
  </FormItem>
  <FormItem
{...formProps}
label="状态"
fieldName="planState"
initialValue={active.planState}
  // initialValue={active.planState}
  >
  <Select style={{ width: '100%' }}>
<Select.Option key="创建中">创建中</Select.Option>
  <Select.Option key="已创建">已创建</Select.Option>
  <Select.Option key="存续中">存续中</Select.Option>
  <Select.Option key="已关闭">已关闭</Select.Option>
  <Select.Option key="已停用">已停用</Select.Option>
  </Select>
  </FormItem>
  </ModalBox>



// handleSearch = (e) => {
//   e.preventDefault();
//   this.props.form.validateFields((err, values) => {
//     if (!err) {
//     }
//   });
// };


  <ModalBox
ref={(r) => {this.modalRef = r}}
title=" 添加信托计划"
handleOk={this.handleOk}
confirmLoading={loading}
  >
  <FormItem
{...formProps}
label="信托计划名称"
fieldName="planName"
initialValue={data.planName}
inputProps={{ disabled: data.planName }}

/>
<FormItem
{...formProps}
label="本期规模"
fieldName="planScale"
initialValue={data.planScale}
/>
<FormItem
{...formProps}
label="成立日"
required={false}
fieldName="planStart"
initialValue={data.planStart}
/>
<FormItem
{...formProps}
required={false}
label="到期终止日"
fieldName="planEnd"
initialValue={data.planEnd}
/>
<FormItem
{...formProps}
label="状态"
fieldName="state"
initialValue={data.state}
  >
  <SelectMap data={PLAN_STATUS}/>
</FormItem>
</ModalBox>
