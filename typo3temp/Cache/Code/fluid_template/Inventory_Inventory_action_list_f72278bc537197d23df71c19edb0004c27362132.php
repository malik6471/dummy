<?php
class FluidCache_Inventory_Inventory_action_list_f72278bc537197d23df71c19edb0004c27362132 extends Tx_Fluid_Core_Compiler_AbstractCompiledTemplate {

public function getVariableContainer() {
	// TODO
	return new Tx_Fluid_Core_ViewHelper_TemplateVariableContainer();
}
public function getLayoutName(Tx_Fluid_Core_Rendering_RenderingContextInterface $renderingContext) {

return NULL;
}
public function hasLayout() {
return FALSE;
}

/**
 * Main Render function
 */
public function render(Tx_Fluid_Core_Rendering_RenderingContextInterface $renderingContext) {
$self = $this;
$output0 = '';

$output0 .= '<table border="1" cellspacing="1" cellpadding="5">
	<tr>
		<th>Serial</th>
		<th>Produktbezeichnung</th>
		<th>Produktbeschreibung</th>
		<th>Anzahl</th>
	</tr>
	';
// Rendering ViewHelper Tx_Fluid_ViewHelpers_ForViewHelper
$arguments1 = array();
$arguments1['each'] = Tx_Fluid_Core_Parser_SyntaxTree_ObjectAccessorNode::getPropertyPath($renderingContext->getTemplateVariableContainer(), 'products', $renderingContext);
$arguments1['as'] = 'product';
$arguments1['key'] = '';
$arguments1['reverse'] = false;
$arguments1['iteration'] = NULL;
$renderChildrenClosure2 = function() use ($renderingContext, $self) {
$output3 = '';

$output3 .= '
	<tr>
		<td valign="top">';
// Rendering ViewHelper Tx_Fluid_ViewHelpers_Format_HtmlspecialcharsViewHelper
$arguments4 = array();
$arguments4['value'] = Tx_Fluid_Core_Parser_SyntaxTree_ObjectAccessorNode::getPropertyPath($renderingContext->getTemplateVariableContainer(), 'product.serial', $renderingContext);
$arguments4['keepQuotes'] = false;
$arguments4['encoding'] = NULL;
$arguments4['doubleEncode'] = true;
$renderChildrenClosure5 = function() use ($renderingContext, $self) {
return NULL;
};
$value6 = ($arguments4['value'] !== NULL ? $arguments4['value'] : $renderChildrenClosure5());

$output3 .= (!is_string($value6) ? $value6 : htmlspecialchars($value6, ($arguments4['keepQuotes'] ? ENT_NOQUOTES : ENT_COMPAT), ($arguments4['encoding'] !== NULL ? $arguments4['encoding'] : Tx_Fluid_Core_Compiler_AbstractCompiledTemplate::resolveDefaultEncoding()), $arguments4['doubleEncode']));

$output3 .= '</td>
		<td valign="top">';
// Rendering ViewHelper Tx_Fluid_ViewHelpers_Format_HtmlspecialcharsViewHelper
$arguments7 = array();
$arguments7['value'] = Tx_Fluid_Core_Parser_SyntaxTree_ObjectAccessorNode::getPropertyPath($renderingContext->getTemplateVariableContainer(), 'product.name', $renderingContext);
$arguments7['keepQuotes'] = false;
$arguments7['encoding'] = NULL;
$arguments7['doubleEncode'] = true;
$renderChildrenClosure8 = function() use ($renderingContext, $self) {
return NULL;
};
$value9 = ($arguments7['value'] !== NULL ? $arguments7['value'] : $renderChildrenClosure8());

$output3 .= (!is_string($value9) ? $value9 : htmlspecialchars($value9, ($arguments7['keepQuotes'] ? ENT_NOQUOTES : ENT_COMPAT), ($arguments7['encoding'] !== NULL ? $arguments7['encoding'] : Tx_Fluid_Core_Compiler_AbstractCompiledTemplate::resolveDefaultEncoding()), $arguments7['doubleEncode']));

$output3 .= '</td>
		<td valign="top">';
// Rendering ViewHelper Tx_Fluid_ViewHelpers_Format_CropViewHelper
$arguments10 = array();
$arguments10['maxCharacters'] = '100';
$arguments10['append'] = '...';
$arguments10['respectWordBoundaries'] = true;
$arguments10['respectHtml'] = true;
$renderChildrenClosure11 = function() use ($renderingContext, $self) {
// Rendering ViewHelper Tx_Fluid_ViewHelpers_Format_HtmlspecialcharsViewHelper
$arguments12 = array();
$arguments12['value'] = Tx_Fluid_Core_Parser_SyntaxTree_ObjectAccessorNode::getPropertyPath($renderingContext->getTemplateVariableContainer(), 'product.description', $renderingContext);
$arguments12['keepQuotes'] = false;
$arguments12['encoding'] = NULL;
$arguments12['doubleEncode'] = true;
$renderChildrenClosure13 = function() use ($renderingContext, $self) {
return NULL;
};
$value14 = ($arguments12['value'] !== NULL ? $arguments12['value'] : $renderChildrenClosure13());
return (!is_string($value14) ? $value14 : htmlspecialchars($value14, ($arguments12['keepQuotes'] ? ENT_NOQUOTES : ENT_COMPAT), ($arguments12['encoding'] !== NULL ? $arguments12['encoding'] : Tx_Fluid_Core_Compiler_AbstractCompiledTemplate::resolveDefaultEncoding()), $arguments12['doubleEncode']));
};
$viewHelper15 = $self->getViewHelper('$viewHelper15', $renderingContext, 'Tx_Fluid_ViewHelpers_Format_CropViewHelper');
$viewHelper15->setArguments($arguments10);
$viewHelper15->setRenderingContext($renderingContext);
$viewHelper15->setRenderChildrenClosure($renderChildrenClosure11);
// End of ViewHelper Tx_Fluid_ViewHelpers_Format_CropViewHelper

$output3 .= $viewHelper15->initializeArgumentsAndRender();

$output3 .= '</td>
		<td valign="top">';
// Rendering ViewHelper Tx_Fluid_ViewHelpers_Format_HtmlspecialcharsViewHelper
$arguments16 = array();
$arguments16['value'] = Tx_Fluid_Core_Parser_SyntaxTree_ObjectAccessorNode::getPropertyPath($renderingContext->getTemplateVariableContainer(), 'product.quantity', $renderingContext);
$arguments16['keepQuotes'] = false;
$arguments16['encoding'] = NULL;
$arguments16['doubleEncode'] = true;
$renderChildrenClosure17 = function() use ($renderingContext, $self) {
return NULL;
};
$value18 = ($arguments16['value'] !== NULL ? $arguments16['value'] : $renderChildrenClosure17());

$output3 .= (!is_string($value18) ? $value18 : htmlspecialchars($value18, ($arguments16['keepQuotes'] ? ENT_NOQUOTES : ENT_COMPAT), ($arguments16['encoding'] !== NULL ? $arguments16['encoding'] : Tx_Fluid_Core_Compiler_AbstractCompiledTemplate::resolveDefaultEncoding()), $arguments16['doubleEncode']));

$output3 .= '</td>
	</tr>
	';
return $output3;
};

$output0 .= Tx_Fluid_ViewHelpers_ForViewHelper::renderStatic($arguments1, $renderChildrenClosure2, $renderingContext);

$output0 .= '
</table>';

return $output0;
}


}
#0             5836      