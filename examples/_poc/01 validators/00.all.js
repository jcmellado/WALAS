
/*

@required

@min(value)
@max(value)
@range(min=Number.MIN_SAFE_INTEGER, max=Number.MAX_SAFE_INTEGER)

@length(min=Number.MIN_SAFE_INTEGER, max=Number.MAX_SAFE_INTEGER)
array --> @size(min=Number.MIN_SAFE_INTEGER, max=Number.MAX_SAFE_INTEGER)

@notBlank
@notEmpty

@pattern(regex, flags)

@past
@future


Hibernate Validator
===================

@AssertFalse - Checks that the annotated element is false
@AssertTrue - Checks that the annotated element is true
@DecimalMax(value, inclusive) - Checks whether the annotated value is less than (/or equal) the specified maximum
@DecimalMin(value, inclusive) - Checks whether the annotated value is larger than (/or equal) the specified minimum
@Digits(integer, fraction) - Checks whether the annotated value is a number having up to integer digits and fraction fractional digits
@Future - Checks whether the annotated date is in the future
@Max(value) - Checks whether the annotated value is less than or equal to the specified maximum
@Min(value) - Checks whether the annotated value is higher than or equal to the specified minimum
@NotNull - Checks that the annotated value is not null
@Null - Checks that the annotated value is null
@Past - Checks whether the annotated date is in the past
@Pattern(regex, flags) - Checks if the annotated string matches the regular expression regex considering the given flag match
@Size(min, max) - Checks if the annotated element’s size is between min and max (inclusive)
@Valid - Performs validation recursively on the associated object

# Additional #
@CreditCardNumber(ignoreNonDigitCharacters) - Checks that the annotated character sequence passes the Luhn checksum test
@Currency(value) - Checks that the currency unit of the annotated javax.money.MonetaryAmount is part of the specified currency units
@EAN(type) - Checks that the annotated character sequence is a valid EAN barcode.
@Email(regexp, flags) - Checks whether the specified character sequence is a valid email address
@Length(min, max) - Validates that the annotated character sequence is between min and max included
@LuhnCheck(startIndex, endIndex, checkDigitIndex, ignoreNonDigitCharacters) - Checks that the digits within the annotated character sequence pass the Luhn checksum algorithm
@Mod10Check(multiplier, weight, startIndex, endIndex, checkDigitIndex, ignoreNonDigitCharacters) - Checks that the digits within the annotated character sequence pass the generic mod 10 checksum algorithm
@Mod11Check(threshold, startIndex, endIndex, checkDigitIndex, ignoreNonDigitCharacters, treatCheck10As, treatCheck11As) - Checks that the digits within the annotated character sequence pass the mod 11 checksum algorithm
@NotBlank - Checks that the annotated character sequence is not null and the trimmed length is greater than 0
@NotEmpty - Checks whether the annotated element is not null nor empty
@Range(min, max) - Checks whether the annotated value lies between (inclusive) the specified minimum and maximum
@SafeHtml(whitelistType , additionalTags, additionalTagsWithAttributes) - Checks whether the annotated value contains potentially malicious fragments such as <script/>.
@ScriptAssert(lang, script, alias, reportOn) - Checks whether the given script can successfully be evaluated against the annotated element
@URL(protocol, host, port, regexp, flags) - Checks if the annotated character sequence is a valid URL according to RFC2396

# Country specific constraints #
@CNPJ - Checks that the annotated character sequence represents a Brazilian corporate tax payer registry number (Cadastro de Pessoa Juríeddica)
@CPF - Checks that the annotated character sequence represents a Brazilian individual taxpayer registry number (Cadastro de Pessoa Fídsica)
@TituloEleitoral - Checks that the annotated character sequence represents a Brazilian voter ID card number (Título Eleitoral)
@NIP - Checks that the annotated character sequence represents a Polish VAT identification number (NIP)
@PESEL - Checks that the annotated character sequence represents a Polish national identification number (PESEL)
@REGON - Checks that the annotated character sequence represents a Polish taxpayer identification number (REGON)

*/
