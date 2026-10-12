<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:import href="./core/pretext-html.xsl"/>
  <!-- Keep PreTeXt's Contents and previous/up/next navigation. -->
  <xsl:template match="*" mode="primary-navigation-other-controls"/>
  <xsl:template name="readability-options"/>
  <xsl:template name="runestone-header"/>
  <!-- Keep author metadata for the banner and PDF without a separate HTML cover. -->
  <xsl:template match="frontmatter" mode="chunking"/>
  <xsl:template match="frontmatter" mode="summary-nav"/>
  <xsl:template match="frontmatter" mode="toc-item"/>
  <xsl:template match="frontmatter" mode="search-page-docs"/>
  <xsl:template match="aside[starts-with(@xml:id, 'margin-')]" mode="is-hidden">false</xsl:template>
  <xsl:template match="biblio[@label]" mode="serial-number">
    <xsl:value-of select="@label"/>
  </xsl:template>
  <xsl:template match="book" mode="next-linear-url">
    <xsl:apply-templates select="(part | chapter)[1]" mode="url"/>
  </xsl:template>
  <xsl:template match="book/chapter[1] | book/part[1]" mode="previous-linear-url">
    <xsl:apply-templates select=".." mode="url"/>
  </xsl:template>
</xsl:stylesheet>
