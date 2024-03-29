<?php

/*                                                                        *
 * This script belongs to the FLOW3 package "Fluid".                      *
 *                                                                        *
 * It is free software; you can redistribute it and/or modify it under    *
 * the terms of the GNU General Public License as published by the Free   *
 * Software Foundation, either version 3 of the License, or (at your      *
 * option) any later version.                                             *
 *                                                                        *
 * This script is distributed in the hope that it will be useful, but     *
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHAN-    *
 * TABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General      *
 * Public License for more details.                                       *
 *                                                                        *
 * You should have received a copy of the GNU General Public License      *
 * along with the script.                                                 *
 * If not, see http://www.gnu.org/licenses/gpl.html                       *
 *                                                                        *
 * The TYPO3 project - inspiring people to share!                         *
 *                                                                        */

/**
 */

/**
 * Form view helper. Generates a <form> Tag.
 *
 * = Basic usage =
 *
 * Use <f:form> to output an HTML <form> tag which is targeted at the specified action, in the current controller and package.
 * It will submit the form data via a POST request. If you want to change this, use method="get" as an argument.
 * <code title="Example">
 * <f:form action="...">...</f:form>
 * </code>
 *
 * = A complex form with a specified encoding type =
 *
 * <code title="Form with enctype set">
 * <f:form action=".." controller="..." package="..." enctype="multipart/form-data">...</f:form>
 * </code>
 *
 * = A Form which should render a domain object =
 *
 * <code title="Binding a domain object to a form">
 * <f:form action="..." name="customer" object="{customer}">
 *   <f:form.hidden property="id" />
 *   <f:form.textbox property="name" />
 * </f:form>
 * </code>
 * This automatically inserts the value of {customer.name} inside the textbox and adjusts the name of the textbox accordingly.
 *
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License, version 2
 */
class Tx_Fluid_ViewHelpers_FormViewHelper extends Tx_Fluid_ViewHelpers_Form_AbstractFormViewHelper {

	/**
	 * @var string
	 */
	protected $tagName = 'form';

	/**
	 * @var Tx_Extbase_Security_Channel_RequestHashService
	 */
	protected $requestHashService;

	/**
	 * @var Tx_Extbase_Service_ExtensionService
	 */
	protected $extensionService;

	/**
	 * We need the arguments of the formActionUri on requesthash calculation
	 * therefore we will store them in here right after calling uriBuilder
	 *
	 * @var array
	 */
	protected $formActionUriArguments;

	/**
	 * @var Tx_Extbase_Configuration_ConfigurationManagerInterface
	 */
	protected $configurationManager;

	/**
	 * Inject a request hash service
	 *
	 * @param Tx_Extbase_Security_Channel_RequestHashService $requestHashService The request hash service
	 * @return void
	 * @author Sebastian Kurfürst <sebastian@typo3.org>
	 */
	public function injectRequestHashService(Tx_Extbase_Security_Channel_RequestHashService $requestHashService) {
		$this->requestHashService = $requestHashService;
	}

	/**
	 * @param Tx_Extbase_Service_ExtensionService $extensionService
	 * @return void
	 */
	public function injectExtensionService(Tx_Extbase_Service_ExtensionService $extensionService) {
		$this->extensionService = $extensionService;
	}

	/**
	 * @param Tx_Extbase_Configuration_ConfigurationManagerInterface $configurationManager
	 * @return void
	 */
	public function injectConfigurationManager(Tx_Extbase_Configuration_ConfigurationManagerInterface $configurationManager) {
		$this->configurationManager = $configurationManager;
	}

	/**
	 * Initialize arguments.
	 *
	 * @return void
	 */
	public function initializeArguments() {
		$this->registerTagAttribute('enctype', 'string', 'MIME type with which the form is submitted');
		$this->registerTagAttribute('method', 'string', 'Transfer type (GET or POST)');
		$this->registerTagAttribute('name', 'string', 'Name of form');
		$this->registerTagAttribute('onreset', 'string', 'JavaScript: On reset of the form');
		$this->registerTagAttribute('onsubmit', 'string', 'JavaScript: On submit of the form');

		$this->registerUniversalTagAttributes();
	}

	/**
	 * Render the form.
	 *
	 * @param string $action Target action
	 * @param array $arguments Arguments
	 * @param string $controller Target controller
	 * @param string $extensionName Target Extension Name (without "tx_" prefix and no underscores). If NULL the current extension name is used
	 * @param string $pluginName Target plugin. If empty, the current plugin name is used
	 * @param integer $pageUid Target page uid
	 * @param mixed $object Object to use for the form. Use in conjunction with the "property" attribute on the sub tags
	 * @param integer $pageType Target page type
	 * @param boolean $noCache set this to disable caching for the target page. You should not need this.
	 * @param boolean $noCacheHash set this to supress the cHash query parameter created by TypoLink. You should not need this.
	 * @param string $section The anchor to be added to the action URI (only active if $actionUri is not set)
	 * @param string $format The requested format (e.g. ".html") of the target page (only active if $actionUri is not set)
	 * @param array $additionalParams additional action URI query parameters that won't be prefixed like $arguments (overrule $arguments) (only active if $actionUri is not set)
	 * @param boolean $absolute If set, an absolute action URI is rendered (only active if $actionUri is not set)
	 * @param boolean $addQueryString If set, the current query parameters will be kept in the action URI (only active if $actionUri is not set)
	 * @param array $argumentsToBeExcludedFromQueryString arguments to be removed from the action URI. Only active if $addQueryString = TRUE and $actionUri is not set
	 * @param string $fieldNamePrefix Prefix that will be added to all field names within this form. If not set the prefix will be tx_yourExtension_plugin
	 * @param string $actionUri can be used to overwrite the "action" attribute of the form tag
	 * @param string $objectName name of the object that is bound to this form. If this argument is not specified, the name attribute of this form is used to determine the FormObjectName
	 * @return string rendered form
	 */
	public function render($action = NULL, array $arguments = array(), $controller = NULL, $extensionName = NULL, $pluginName = NULL, $pageUid = NULL, $object = NULL, $pageType = 0, $noCache = FALSE, $noCacheHash = FALSE, $section = '', $format = '', array $additionalParams = array(), $absolute = FALSE, $addQueryString = FALSE, array $argumentsToBeExcludedFromQueryString = array(), $fieldNamePrefix = NULL, $actionUri = NULL, $objectName = NULL) {
		$this->setFormActionUri();

		if (strtolower($this->arguments['method']) === 'get') {
			$this->tag->addAttribute('method', 'get');
		} else {
			$this->tag->addAttribute('method', 'post');
		}

		$this->addFormObjectNameToViewHelperVariableContainer();
		$this->addFormObjectToViewHelperVariableContainer();
		$this->addFieldNamePrefixToViewHelperVariableContainer();
		$this->addFormFieldNamesToViewHelperVariableContainer();

		$formContent = $this->renderChildren();

		$content = chr(10) . '<div style="display: none">';
		$content .= $this->renderHiddenIdentityField($this->arguments['object'], $this->getFormObjectName());
		$content .= $this->renderAdditionalIdentityFields();
		$content .= $this->renderHiddenReferrerFields();
		$content .= $this->renderRequestHashField(); // Render hmac after everything else has been rendered
		$content .= chr(10) . '</div>' . chr(10);
		$content .= $formContent;

		$this->tag->setContent($content);

		$this->removeFieldNamePrefixFromViewHelperVariableContainer();
		$this->removeFormObjectFromViewHelperVariableContainer();
		$this->removeFormObjectNameFromViewHelperVariableContainer();
		$this->removeFormFieldNamesFromViewHelperVariableContainer();
		$this->removeCheckboxFieldNamesFromViewHelperVariableContainer();

		return $this->tag->render();
	}

	/**
	 * Sets the "action" attribute of the form tag
	 *
	 * @return void
	 */
	protected function setFormActionUri() {
		if ($this->hasArgument('actionUri')) {
			$formActionUri = $this->arguments['actionUri'];
		} else {
			$uriBuilder = $this->controllerContext->getUriBuilder();
			$formActionUri = $uriBuilder
				->reset()
				->setTargetPageUid($this->arguments['pageUid'])
				->setTargetPageType($this->arguments['pageType'])
				->setNoCache($this->arguments['noCache'])
				->setUseCacheHash(!$this->arguments['noCacheHash'])
				->setSection($this->arguments['section'])
				->setCreateAbsoluteUri($this->arguments['absolute'])
				->setArguments((array)$this->arguments['additionalParams'])
				->setAddQueryString($this->arguments['addQueryString'])
				->setArgumentsToBeExcludedFromQueryString((array)$this->arguments['argumentsToBeExcludedFromQueryString'])
				->setFormat($this->arguments['format'])
				->uriFor($this->arguments['action'], $this->arguments['arguments'], $this->arguments['controller'], $this->arguments['extensionName'], $this->arguments['pluginName']);
			$this->formActionUriArguments = $uriBuilder->getArguments();
		}
		$this->tag->addAttribute('action', $formActionUri);
	}

	/**
	 * Render additional identity fields which were registered by form elements.
	 * This happens if a form field is defined like property="bla.blubb" - then we might need an identity property for the sub-object "bla".
	 *
	 * @return string HTML-string for the additional identity properties
	 * @author Sebastian Kurfürst <sebastian@typo3.org>
	 */
	protected function renderAdditionalIdentityFields() {
		if ($this->viewHelperVariableContainer->exists('Tx_Fluid_ViewHelpers_FormViewHelper', 'additionalIdentityProperties')) {
			$additionalIdentityProperties = $this->viewHelperVariableContainer->get('Tx_Fluid_ViewHelpers_FormViewHelper', 'additionalIdentityProperties');
			$output = '';
			foreach ($additionalIdentityProperties as $identity) {
				$output .= chr(10) . $identity;
			}
			return $output;
		}
		return '';
	}

	/**
	 * Renders hidden form fields for referrer information about
	 * the current controller and action.
	 *
	 * @return string Hidden fields with referrer information
	 * @todo filter out referrer information that is equal to the target (e.g. same packageKey)
	 */
	protected function renderHiddenReferrerFields() {
		$request = $this->controllerContext->getRequest();
		$extensionName = $request->getControllerExtensionName();
		$controllerName = $request->getControllerName();
		$actionName = $request->getControllerActionName();

		$result = chr(10);
		if ($this->configurationManager->isFeatureEnabled('rewrittenPropertyMapper')) {
			$result .= '<input type="hidden" name="' . $this->prefixFieldName('__referrer[@extension]') . '" value="' . $extensionName . '" />' . chr(10);
			$result .= '<input type="hidden" name="' . $this->prefixFieldName('__referrer[@controller]') . '" value="' . $controllerName . '" />' . chr(10);
			$result .= '<input type="hidden" name="' . $this->prefixFieldName('__referrer[@action]') . '" value="' . $actionName . '" />' . chr(10);
			$result .= '<input type="hidden" name="' . $this->prefixFieldName('__referrer[arguments]') . '" value="' . htmlspecialchars(serialize($request->getArguments())) . '" />' . chr(10);
		} else {
				// @deprecated since Extbase 1.4.0, will be removed with Extbase 1.6.0.
			$result .= '<input type="hidden" name="' . $this->prefixFieldName('__referrer[extensionName]') . '" value="' . $extensionName . '" />' . chr(10);
			$result .= '<input type="hidden" name="' . $this->prefixFieldName('__referrer[controllerName]') . '" value="' . $controllerName . '" />' . chr(10);
			$result .= '<input type="hidden" name="' . $this->prefixFieldName('__referrer[actionName]') . '" value="' . $actionName . '" />' . chr(10);
		}

		return $result;
	}

	/**
	 * Adds the form object name to the ViewHelperVariableContainer if "objectName" argument or "name" attribute is specified.
	 *
	 * @return void
	 */
	protected function addFormObjectNameToViewHelperVariableContainer() {
		$formObjectName = $this->getFormObjectName();
		if ($formObjectName !== NULL) {
			$this->viewHelperVariableContainer->add('Tx_Fluid_ViewHelpers_FormViewHelper', 'formObjectName', $formObjectName);
		}
	}

	/**
	 * Removes the form name from the ViewHelperVariableContainer.
	 *
	 * @return void
	 */
	protected function removeFormObjectNameFromViewHelperVariableContainer() {
		$formObjectName = $this->getFormObjectName();
		if ($formObjectName !== NULL) {
			$this->viewHelperVariableContainer->remove('Tx_Fluid_ViewHelpers_FormViewHelper', 'formObjectName');
		}
	}

	/**
	 * Returns the name of the object that is bound to this form.
	 * If the "objectName" argument has been specified, this is returned. Otherwise the name attribute of this form.
	 * If neither objectName nor name arguments have been set, NULL is returned.
	 *
	 * @return string specified Form name or NULL if neither $objectName nor $name arguments have been specified
	 * @author Bastian Waidelich <bastian@typo3.org>
	 */
	protected function getFormObjectName() {
		$formObjectName = NULL;
		if ($this->hasArgument('objectName')) {
			$formObjectName = $this->arguments['objectName'];
		} elseif ($this->hasArgument('name')) {
			$formObjectName = $this->arguments['name'];
		}
		return $formObjectName;
	}
	/**
	 * Adds the object that is bound to this form to the ViewHelperVariableContainer if the formObject attribute is specified.
	 *
	 * @return void
	 */
	protected function addFormObjectToViewHelperVariableContainer() {
		if ($this->hasArgument('object')) {
			$this->viewHelperVariableContainer->add('Tx_Fluid_ViewHelpers_FormViewHelper', 'formObject', $this->arguments['object']);
			$this->viewHelperVariableContainer->add('Tx_Fluid_ViewHelpers_FormViewHelper', 'additionalIdentityProperties', array());
		}
	}

	/**
	 * Removes the form object from the ViewHelperVariableContainer.
	 *
	 * @return void
	 */
	protected function removeFormObjectFromViewHelperVariableContainer() {
		if ($this->hasArgument('object')) {
			$this->viewHelperVariableContainer->remove('Tx_Fluid_ViewHelpers_FormViewHelper', 'formObject');
			$this->viewHelperVariableContainer->remove('Tx_Fluid_ViewHelpers_FormViewHelper', 'additionalIdentityProperties');
		}
	}

	/**
	 * Adds the field name prefix to the ViewHelperVariableContainer
	 *
	 * @return void
	 */
	protected function addFieldNamePrefixToViewHelperVariableContainer() {
		$fieldNamePrefix = $this->getFieldNamePrefix();
		$this->viewHelperVariableContainer->add('Tx_Fluid_ViewHelpers_FormViewHelper', 'fieldNamePrefix', $fieldNamePrefix);
	}

	/**
	 * Get the field name prefix
	 *
	 * @return string
	 */
	protected function getFieldNamePrefix() {
		if ($this->hasArgument('fieldNamePrefix')) {
			return $this->arguments['fieldNamePrefix'];
		} else {
			return $this->getDefaultFieldNamePrefix();
		}
	}

	/**
	 * Removes field name prefix from the ViewHelperVariableContainer
	 *
	 * @return void
	 */
	protected function removeFieldNamePrefixFromViewHelperVariableContainer() {
		$this->viewHelperVariableContainer->remove('Tx_Fluid_ViewHelpers_FormViewHelper', 'fieldNamePrefix');
	}

	/**
	 * Adds a container for form field names to the ViewHelperVariableContainer
	 *
	 * @return void
	 * @author Sebastian Kurfürst <sebastian@typo3.org>
	 */
	protected function addFormFieldNamesToViewHelperVariableContainer() {
		$this->viewHelperVariableContainer->add('Tx_Fluid_ViewHelpers_FormViewHelper', 'formFieldNames', array());
	}

	/**
	 * Removes the container for form field names from the ViewHelperVariableContainer
	 *
	 * @return void
	 * @author Sebastian Kurfürst <sebastian@typo3.org>
	 */
	protected function removeFormFieldNamesFromViewHelperVariableContainer() {
		$this->viewHelperVariableContainer->remove('Tx_Fluid_ViewHelpers_FormViewHelper', 'formFieldNames');
	}

	/**
	 * Render the request hash field
	 *
	 * @return string the hmac field
	 * @author Sebastian Kurfürst <sebastian@typo3.org>
	 */
	protected function renderRequestHashField() {
		$formFieldNames = $this->viewHelperVariableContainer->get('Tx_Fluid_ViewHelpers_FormViewHelper', 'formFieldNames');
		$this->postProcessUriArgumentsForRequesthash($this->formActionUriArguments, $formFieldNames);
		$requestHash = $this->requestHashService->generateRequestHash($formFieldNames, $this->getFieldNamePrefix());
		// in v4, we need to prefix __hmac as well to make it show up in the request object.
		return '<input type="hidden" name="' . $this->prefixFieldName('__hmac') . '" value="' . htmlspecialchars($requestHash) . '" />';
	}

	/**
	 * Add the URI arguments after postprocessing to the request hash as well.
	 */
	protected function postProcessUriArgumentsForRequestHash($arguments, &$results, $currentPrefix = '', $level = 0) {
		if (!count($arguments)) return;
		foreach ($arguments as $argumentName => $argumentValue) {
			if (is_array($argumentValue)) {
				$prefix = ($level==0 ? $argumentName : $currentPrefix . '[' . $argumentName . ']');
				$this->postProcessUriArgumentsForRequestHash($argumentValue, $results, $prefix, $level+1);
			} else {
				$results[] = ($level==0 ? $argumentName : $currentPrefix . '[' . $argumentName . ']');
			}
		}
	}

	/**
	 * Retrieves the default field name prefix for this form
	 *
	 * @return string default field name prefix
	 */
	protected function getDefaultFieldNamePrefix() {
		$request = $this->controllerContext->getRequest();
		if ($this->hasArgument('extensionName')) {
			$extensionName = $this->arguments['extensionName'];
		} else {
			$extensionName = $request->getControllerExtensionName();
		}
		if ($this->hasArgument('pluginName')) {
			$pluginName = $this->arguments['pluginName'];
		} else {
			$pluginName = $request->getPluginName();
		}
		if ($extensionName !== NULL && $pluginName != NULL) {
			return $this->extensionService->getPluginNamespace($extensionName, $pluginName);
		} else {
			return '';
		}
	}

	/**
	 * Remove Checkbox field names from ViewHelper variable container, to start from scratch when a new form starts.
	 */
	protected function removeCheckboxFieldNamesFromViewHelperVariableContainer() {
		if ($this->viewHelperVariableContainer->exists('Tx_Fluid_ViewHelpers_Form_CheckboxViewHelper', 'checkboxFieldNames')) {
			$this->viewHelperVariableContainer->remove('Tx_Fluid_ViewHelpers_Form_CheckboxViewHelper', 'checkboxFieldNames');
		}
	}
}

?>